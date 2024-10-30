# frozen_string_literal: true

module SlurmMetrics
  # Manages the stored metrics within the user settings store.
  # The cache expires after 24hours.
  class MetricsCache
    include UserSettingStore

    def set_metrics(from, to, metrics)
      slurm_metrics = {
        slurm_metrics: {
          timestamp: Time.now.strftime('%Y-%m-%dT%H:%M:%S'),
          from: from,
          to: to,
          metrics: metrics.to_hash
        }
      }
      update_user_settings(slurm_metrics)
    end

    def set_fairshare(timestamp, fairshare)
      slurm_fairshare = {
        slurm_fairshare: {
          timestamp: timestamp.strftime('%Y-%m-%dT%H:%M:%S'),
          fairshare: fairshare
        }
      }
      update_user_settings(slurm_fairshare)
    end

    def get_metrics
      slurm_metrics = user_settings.fetch(:slurm_metrics, {})
      return nil if expired?(slurm_metrics[:timestamp])

      [slurm_metrics[:from], slurm_metrics[:to], SlurmMetrics::MetricsSummary.new(slurm_metrics[:metrics])]
    end

    def get_fairshare
      slurm_fairshare = user_settings.fetch(:slurm_fairshare, {})
      return nil if expired?(slurm_fairshare[:timestamp])

      [Time.parse(slurm_fairshare[:timestamp]), slurm_fairshare[:fairshare]]
    end

    private

    def expired?(date_string)
      return true if date_string.blank?

      # Parse the date string and compare the time difference with 24 hours (in seconds)
      Time.now - Time.parse(date_string) > 24 * 60 * 60
    end

  end
end
