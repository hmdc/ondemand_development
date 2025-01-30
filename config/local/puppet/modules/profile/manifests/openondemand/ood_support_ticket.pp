# Class to configure the support ticket configuration for OnDemand
class profile::openondemand::ood_support_ticket (
  Optional[String] $server = undef,
  Optional[Array] $queues = [],
  Optional[String] $api_token = undef,
  Optional[String] $api_user = undef,
  Optional[String] $api_pass = undef,
  Optional[String] $priority = '4',
  Optional[String] $proxy_server = undef,
  Optional[String] $template = 'support_ticket_rt.yml.erb',
){

  if ($server) {
    file { '/etc/ood/config/ondemand.d/support_ticket.yml':
      ensure  => 'file',
      owner   => 'root',
      group   => 'root',
      mode    => '0644',
      content => template("profile/openondemand/common/ondemand.d/${template}"),
    }
  }
}
