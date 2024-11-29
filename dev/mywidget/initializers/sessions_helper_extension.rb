# frozen_string_literal: true

# SessionsHelper Extensions to add job metrics to session card in OODv3.x
Rails.application.config.after_initialize do
  Rails.logger.info 'Executing Sessions Helper extension ...'
  module BatchConnect::SessionsHelper
    def delete(session)
      title = "#{t('dashboard.batch_connect_sessions_delete_title')} #{session.title} #{t('dashboard.batch_connect_sessions_word')}"
      button_to(
        batch_connect_session_path(session.id),
        method: :delete,
        class: "btn btn-danger float-end btn-delete",
        title: title,
        'aria-label': title,
        data: { confirm: 'Are you sure you want to destroy this forever?', toggle: "tooltip", placement: "bottom"}
      ) do
        "#{fa_icon('times-circle', classes: nil)} <span aria-hidden='true'>Delete Forever</span>".html_safe
      end
    end
  end

  Rails.logger.info 'Executing Sessions Helper completed'
end