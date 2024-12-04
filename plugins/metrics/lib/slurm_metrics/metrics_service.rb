# frozen_string_literal: true

module SlurmMetrics
  # Service to manages retrieving and storing the user metrics within the user settings store.
  # It uses a 24hours cache for theSlurm data.
  class MetricsService
    include UserSettingStore
    METRICS_PERIOD = 7.days

    attr_reader :cluster

    def initialize
      @cluster = Configuration.job_clusters.select(&:slurm?).first
    end

    def read_metrics
      slurm_metrics = user_settings.fetch(:slurm_metrics, {})
      slurm_metrics = refresh_metrics if expired?(slurm_metrics[:timestamp])

      SlurmMetrics::MetricsSummary.new(slurm_metrics[:metrics])
    end

    def read_job_metrics(session)
      file_path = job_metrics_path(session.id)
      return refresh_job_metrics(session) unless file_path.exist?

      job_metrics = SlurmMetrics::MetricsSummary.new
      begin
        yml = YAML.safe_load(file_path.read) || {}
        job_metrics = SlurmMetrics::MetricsSummary.new(yml.symbolize_keys)
      rescue => e
        Rails.logger.error("Can't read or parse job metrics: #{file_path} because of error #{e}")
      end

      job_metrics
    end

    def read_fairshare
      slurm_fairshare = user_settings.fetch(:slurm_fairshare, {})
      slurm_fairshare = refresh_fairshare if expired?(slurm_fairshare[:timestamp])
      fairshare = slurm_fairshare[:fairshare]
      fairshare[:from] = Time.at(fairshare[:from])

      OpenStruct.new(fairshare)
    end

    private

    def refresh_metrics
      from = Time.now - METRICS_PERIOD
      to = Time.now
      job_data = execute_slurm_command do
        cluster.job_adapter.metrics(from: from.strftime('%Y-%m-%dT00:00:00'), to: to.strftime('%Y-%m-%dT23:59:59'))
      end
      processor = SlurmMetrics::MetricsProcessor.new
      metrics_summary = processor.calculate_metrics(from, to, job_data)

      set_metrics(metrics_summary)
    end

    def refresh_job_metrics(session)
      job_data = execute_slurm_command { cluster.job_adapter.metrics(job_ids: [session.job_id]) }
      processor = SlurmMetrics::MetricsProcessor.new
      job_metrics = processor.calculate_metrics(Time.now, Time.now, job_data, ignore_cancelled: false)
      job_metrics_file = job_metrics_path(session.id)
      job_metrics_file.write(job_metrics.to_hash.stringify_keys.to_yaml)
      job_metrics
    end

    def refresh_fairshare
      data = execute_slurm_command { cluster.job_adapter.fairshare }
      fair_share = {
        from: Time.now.to_i,
        data: data
      }
      set_fairshare(fair_share)
    end

    def set_metrics(metrics)
      slurm_metrics = {
        timestamp: Time.now.strftime('%Y-%m-%dT%H:%M:%S'),
        metrics: metrics.to_hash
      }
      update_user_settings({ slurm_metrics: slurm_metrics })
      slurm_metrics
    end

    def set_fairshare(fairshare)
      slurm_fairshare = {
        timestamp: Time.now.strftime('%Y-%m-%dT%H:%M:%S'),
        fairshare: fairshare
      }
      update_user_settings({ slurm_fairshare: slurm_fairshare })
      slurm_fairshare
    end

    def expired?(date_string)
      return true if date_string.blank?

      # Parse the date string and compare the time difference with 24 hours (in seconds)
      Time.now - Time.parse(date_string) > 24 * 60 * 60
    end

    def job_metrics_path(session_id)
      BatchConnect::Session.dataroot.join('metrics').tap { |p| p.mkpath unless p.exist? }.join(session_id)
    end

    def execute_slurm_command
      yield
    rescue => e
      Rails.logger.error("Error executing Metrics command. Most likely timeout. Error: #{e}")
      []
    end

  end
end