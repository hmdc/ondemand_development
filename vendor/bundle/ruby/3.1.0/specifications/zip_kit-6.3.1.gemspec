# -*- encoding: utf-8 -*-
# stub: zip_kit 6.3.1 ruby lib

Gem::Specification.new do |s|
  s.name = "zip_kit".freeze
  s.version = "6.3.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Julik Tarkhanov".freeze, "Noah Berman".freeze, "Dmitry Tymchuk".freeze, "David Bosveld".freeze, "Felix B\u00FCnemann".freeze]
  s.bindir = "exe".freeze
  s.date = "2024-08-11"
  s.description = "Stream out ZIP files from Ruby. Successor to zip_tricks.".freeze
  s.email = ["me@julik.nl".freeze]
  s.homepage = "https://github.com/julik/zip_kit".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.6.0".freeze)
  s.rubygems_version = "3.3.27".freeze
  s.summary = "Stream out ZIP files from Ruby. Successor to zip_tricks.".freeze

  s.installed_by_version = "3.3.27" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_development_dependency(%q<rubyzip>.freeze, ["~> 2"])
    s.add_development_dependency(%q<rack>.freeze, [">= 0"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 12.2"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 3"])
    s.add_development_dependency(%q<rspec-mocks>.freeze, ["~> 3.10", ">= 3.10.2"])
    s.add_development_dependency(%q<complexity_assert>.freeze, [">= 0"])
    s.add_development_dependency(%q<coderay>.freeze, [">= 0"])
    s.add_development_dependency(%q<benchmark-ips>.freeze, [">= 0"])
    s.add_development_dependency(%q<allocation_stats>.freeze, ["~> 0.1.5"])
    s.add_development_dependency(%q<yard>.freeze, ["~> 0.9"])
    s.add_development_dependency(%q<standard>.freeze, ["= 1.28.5"])
    s.add_development_dependency(%q<magic_frozen_string_literal>.freeze, [">= 0"])
    s.add_development_dependency(%q<puma>.freeze, [">= 0"])
    s.add_development_dependency(%q<rails>.freeze, ["~> 5"])
    s.add_development_dependency(%q<actionpack>.freeze, ["~> 5"])
    s.add_development_dependency(%q<nokogiri>.freeze, ["~> 1", ">= 1.13"])
    s.add_development_dependency(%q<sinatra>.freeze, [">= 0"])
    s.add_development_dependency(%q<sord>.freeze, [">= 0"])
  else
    s.add_dependency(%q<bundler>.freeze, [">= 0"])
    s.add_dependency(%q<rubyzip>.freeze, ["~> 2"])
    s.add_dependency(%q<rack>.freeze, [">= 0"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.2"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3"])
    s.add_dependency(%q<rspec-mocks>.freeze, ["~> 3.10", ">= 3.10.2"])
    s.add_dependency(%q<complexity_assert>.freeze, [">= 0"])
    s.add_dependency(%q<coderay>.freeze, [">= 0"])
    s.add_dependency(%q<benchmark-ips>.freeze, [">= 0"])
    s.add_dependency(%q<allocation_stats>.freeze, ["~> 0.1.5"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.9"])
    s.add_dependency(%q<standard>.freeze, ["= 1.28.5"])
    s.add_dependency(%q<magic_frozen_string_literal>.freeze, [">= 0"])
    s.add_dependency(%q<puma>.freeze, [">= 0"])
    s.add_dependency(%q<rails>.freeze, ["~> 5"])
    s.add_dependency(%q<actionpack>.freeze, ["~> 5"])
    s.add_dependency(%q<nokogiri>.freeze, ["~> 1", ">= 1.13"])
    s.add_dependency(%q<sinatra>.freeze, [">= 0"])
    s.add_dependency(%q<sord>.freeze, [">= 0"])
  end
end
