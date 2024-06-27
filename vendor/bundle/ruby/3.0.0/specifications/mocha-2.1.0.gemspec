# -*- encoding: utf-8 -*-
# stub: mocha 2.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "mocha".freeze
  s.version = "2.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["James Mead".freeze]
  s.date = "2023-07-27"
  s.description = "Mocking and stubbing library with JMock/SchMock syntax, which allows mocking and stubbing of methods on real (non-mock) classes.".freeze
  s.email = "mocha-developer@googlegroups.com".freeze
  s.homepage = "https://mocha.jamesmead.org".freeze
  s.licenses = ["MIT".freeze, "BSD-2-Clause".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0".freeze)
  s.rubygems_version = "3.2.33".freeze
  s.summary = "Mocking and stubbing library".freeze

  s.installed_by_version = "3.2.33" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<ruby2_keywords>.freeze, [">= 0.0.5"])
  else
    s.add_dependency(%q<ruby2_keywords>.freeze, [">= 0.0.5"])
  end
end
