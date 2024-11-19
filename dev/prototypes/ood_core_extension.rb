# Slurm Adapter Extensions to extract metrics with sacct
Rails.application.config.after_initialize do
  Rails.logger.info 'Executing OOD CORE extension ...'
  require 'ood_core/job/adapters/slurm'

  module OodCore
    module Job
      module Adapters
        class Slurm
          class Batch
            # Metrics fields requested from a formatted `sacct` call
            def sacct_metrics_fields
              {
                # The user name of the user who ran the job.
                user: 'User',
                # Job Id for reference
                job_id: 'JobId',
                # The name of the job or job step
                job_name: 'JobName',
                # The job's elapsed time.
                elapsed: 'Elapsed',
                # Minimum required memory for the job
                req_mem: 'ReqMem',
                # Count of allocated CPUs
                alloc_cpus: 'AllocCPUS',
                # Number of requested CPUs.
                req_cpus: 'ReqCPUS',
                # What the timelimit was/is for the job
                time_limit: 'Timelimit',
                # Displays the job status, or state
                state: 'State',
                # The sum of the SystemCPU and UserCPU time used by the job or job step
                total_cpu: 'TotalCPU',
                # Maximum resident set size of all tasks in job.
                max_rss: 'MaxRSS',
                # Identifies the partition on which the job ran.
                partition: 'Partition',
                # The time the job was submitted. In the same format as End.
                submit_time: 'Submit',
                # Initiation time of the job. In the same format as End.
                start_time: 'Start',
                # Trackable resources. These are the minimum resource counts requested by the job/step at submission time.
                req_tres: 'ReqTRES'
              }
            end

            def sacct_metrics(job_ids, states, from, to, show_steps)
              # https://slurm.schedmd.com/sacct.html
              fields = sacct_metrics_fields
              args = ['-P'] # Output will be delimited
              args.concat ['--delimiter', UNIT_SEPARATOR]
              args.concat ['-n'] # No header
              args.concat ['--units', 'G'] # Memory units in GB
              args.concat ['--allocations'] unless show_steps # Show statistics relevant to the job, not taking steps into consideration
              args.concat ['-o', fields.values.join(',')] # Required data
              args.concat ['--state', states.join(',')] unless states.empty? # Filter by these states
              args.concat ['-j', job_ids.join(',')] unless job_ids.empty? # Filter by these job ids
              args.concat ['-S', from] if from # Filter from This date
              args.concat ['-E', to] if to # Filter until this date

              metrics = []
              StringIO.open(call('sacct', *args)) do |output|
                output.each_line do |line|
                  # Replace blank values with nil
                  values = line.strip.split(UNIT_SEPARATOR).map{ |value| value.blank? ? nil : value }
                  metrics << Hash[fields.keys.zip(values)] unless values.empty?
                end
              end
              metrics
            end
          end

          # Mapping of state codes for Slurm
          STATE_MAP = {
            'BF' => :completed,  # BOOT_FAIL
            'CA' => :completed,  # CANCELLED
            'CD' => :completed,  # COMPLETED
            'CF' => :queued,     # CONFIGURING
            'CG' => :running,    # COMPLETING
            'F'  => :completed,  # FAILED
            'NF' => :completed,  # NODE_FAIL
            'PD' => :queued,     # PENDING
            'PR' => :suspended,  # PREEMPTED
            'RV' => :completed,  # REVOKED
            'R'  => :running,    # RUNNING
            'SE' => :completed,  # SPECIAL_EXIT
            'ST' => :running,    # STOPPED
            'S'  => :suspended,  # SUSPENDED
            'TO' => :completed,   # TIMEOUT
            'OOM' => :completed,   # OUT_OF_MEMORY

            'BOOT_FAIL' => :completed,
            'CANCELED' => :completed,
            'COMPLETED' => :completed,
            'DEADLINE' => :completed,
            'FAILED'  => :completed,
            'NODE_FAIL'  => :completed,
            'OUT_OF_MEMORY' => :completed,
            'PENDING'  => :queued,
            'PREEMPTED'  => :completed,
            'RUNNING'  => :running,
            'REQUEUED'  => :queued,
            'REVOKED'  => :completed,
            'SUSPENDED'  => :suspended,
            'TIMEOUT' => :completed
          }

          def sacct_metrics(job_ids: [], states: [], from: nil, to: nil, show_steps: false)
            @slurm.sacct_metrics(job_ids, states, from, to, show_steps).map do |v|
              Info.new(
                id: v[:job_id],
                status: get_state(v[:state]),
                job_name: v[:job_name],
                job_owner: v[:user],
                procs: v[:alloc_cpus],
                queue_name: v[:partition],
                wallclock_time: duration_in_seconds(v[:elapsed]),
                wallclock_limit: duration_in_seconds(v[:time_limit]),
                cpu_time: duration_in_seconds(v[:total_cpu]),
                submission_time: parse_time(v[:submit_time]),
                dispatch_time: parse_time(v[:start_time]),
                native: v,
                gpus: self.class.gpus_from_gres(v[:gres])
              )
            end
          end

          # Parse date time string ignoring unknown values returned by Slurm
          def parse_time(date_time)
            return nil if date_time.empty? || %w[N/A NONE UNKNOWN].include?(date_time.to_s.upcase)

            Time.parse(date_time)
          end

        end
      end
    end
  end

  Rails.logger.info 'Executing OOD CORE extension completed'
end