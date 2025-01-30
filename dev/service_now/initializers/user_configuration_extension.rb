# UserConfiguration Extensions to add support for ServiceNow support ticket backend implementation
Rails.application.config.after_initialize do
  Rails.logger.info 'Executing UserConfiguration extension ...'
  class UserConfiguration
    # Create support ticket service class based on the configuration
    def support_ticket_service
      # Supported delivery mechanism
      return SupportTicketEmailService.new(support_ticket) if support_ticket[:email]
      return SupportTicketRtService.new(support_ticket) if support_ticket[:rt_api]
      return SupportTicketServiceNowService.new(support_ticket) if support_ticket[:servicenow_api]

      raise StandardError, I18n.t('dashboard.user_configuration.support_ticket_error')
    end

  end

  Rails.logger.info 'Executing UserConfiguration extension completed'
end
