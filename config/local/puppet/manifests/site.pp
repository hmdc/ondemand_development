node default {

  package { 'ruby:3.1':
    ensure      => present,
    provider    => dnfmodule,
    enable_only => true,
  }

  package { 'nodejs:18':
    ensure      => present,
    provider    => dnfmodule,
    enable_only => true,
  }

  include openondemand

  # resource defaults from FASRC openondemand.pp
  File {
    ensure  => present,
    owner   => 'root',
    group   => 'root',
    mode    => '0644',
    require => Package[ondemand]
  }

  $config_path = 'file:///etc/puppetlabs/code/environments/production/files'

  if $openondemand::oidc_uri {
    file { '/opt/ood/ood-portal-generator/templates/ood-portal.conf.erb':
      source => "${config_path}/ood-portal-generator/ood-portal-v3.0.conf.erb",
      notify    => Exec['ood-portal-generator-generate'],
    }
  }

  file { '/var/lib/ondemand-nginx/config/apps/sys/ood.conf':
      source     => "${config_path}/ood.conf",
      require    => Exec['nginx_stage-nginx_clean'],
  }

  file { ['/var/www/ood/apps/sys/dashboard/lib/ood_core',
          '/var/www/ood/apps/sys/dashboard/lib/ood_core/batch_connect',
          '/var/www/ood/apps/sys/dashboard/lib/ood_core/batch_connect/templates',]:
    ensure => directory,
  }

}
