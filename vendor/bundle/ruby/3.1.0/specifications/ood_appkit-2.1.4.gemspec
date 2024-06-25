# -*- encoding: utf-8 -*-
# stub: ood_appkit 2.1.4 ruby lib

Gem::Specification.new do |s|
  s.name = "ood_appkit".freeze
  s.version = "2.1.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Eric Franz".freeze, "Jeremy Nicklas".freeze]
  s.date = "2024-02-19"
  s.description = "Provides an interface to working with other Open OnDemand (OOD) apps. It provides a dataroot for OOD apps to write data to and common assets and helper objects for providing branding and documentation within the apps.".freeze
  s.email = ["efranz@osc.edu".freeze, "jnicklas@osc.edu".freeze]
  s.homepage = "https://github.com/OSC/ood_appkit".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.2.0".freeze)
  s.rubygems_version = "3.3.27".freeze
  s.summary = "Open OnDemand gem to help build OOD apps and interface with other OOD apps.".freeze

  s.installed_by_version = "3.3.27" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<rails>.freeze, [">= 6.0.0"])
    s.add_runtime_dependency(%q<ood_core>.freeze, ["~> 0.1"])
    s.add_runtime_dependency(%q<addressable>.freeze, ["~> 2.4"])
    s.add_runtime_dependency(%q<redcarpet>.freeze, ["~> 3.2"])
    s.add_runtime_dependency(%q<lograge>.freeze, ["~> 0.3"])
    s.add_development_dependency(%q<sqlite3>.freeze, [">= 0"])
  else
    s.add_dependency(%q<rails>.freeze, [">= 6.0.0"])
    s.add_dependency(%q<ood_core>.freeze, ["~> 0.1"])
    s.add_dependency(%q<addressable>.freeze, ["~> 2.4"])
    s.add_dependency(%q<redcarpet>.freeze, ["~> 3.2"])
    s.add_dependency(%q<lograge>.freeze, ["~> 0.3"])
    s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
  end
end
