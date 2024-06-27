Rails.application.config.after_initialize do
  OodFilesApp.candidate_favorite_paths.tap do |paths|
    ## all users should always have a scratch folder for their primary group
    ## and scratch directories for other labs they are part of
    labs = User.new.groups.map(&:name)
    primary = labs[0]
    labs = labs[1..].grep(/_lab/)
    labs.unshift(primary)
    paths.concat labs.map { |p| FavoritePath.new("/n/holyscratch01/#{p}", title: "Scratch #{p}")  }
  end

  NavConfig.categories = ["Clusters", "Files", "Jobs", "Interactive Apps" ]
  NavConfig.categories_whitelist = true
end
