# Slurm Adapter Extensions to extract metrics with sacct
Rails.application.config.after_initialize do
  Rails.logger.info 'Executing Sessions Helper extension ...'
  module BatchConnect::SessionsHelper
    # UPDATE SUPPORT TICKET PARTIAL TO ADD JOB METRICS
    # BETTER THAN UPDATE OTHER METHOD MORE LIKELY TO CHANGE
    def support_ticket(session)
      render(partial: 'batch_connect/sessions/card/support_ticket', locals: { session: session })
      render(partial: 'batch_connect/sessions/card/session_job_metrics', locals: { session: session }) if session.completed?
    end
  end

  Rails.logger.info 'Executing Sessions Helper completed'
end