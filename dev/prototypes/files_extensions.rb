Rails.application.config.after_initialize do
  OodFilesApp.candidate_favorite_paths.tap do |paths|
    paths.concat [FavoritePath.new('/var/www/ood/apps/sys/dataverse', title: 'Dataverse Dir')]
  end
end
