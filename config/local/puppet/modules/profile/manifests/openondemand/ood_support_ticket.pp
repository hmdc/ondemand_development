# Class to configure the support ticket configuration for OnDemand
class profile::openondemand::ood_support_ticket (
  Optional[String] $server = undef,
  Optional[Array] $queues = [],
  Optional[String] $api_token = undef,
  Optional[String] $api_user = undef,
  Optional[String] $api_pass = undef,
  Optional[String] $priority = undef,
  Optional[String] $proxy_server = undef,
  Optional[Hash] $custom_content = {},
  Enum['email', 'rt_api', 'servicenow_api'] $type = 'servicenow_api',
  Optional[String] $template = undef,
){

  $support_ticket_content = {
    $type => {
      'server' => $server,
      'proxy' => $proxy_server,
      'user' => $api_user,
      'pass' => $api_pass,
      'auth_token' => $api_token,
      'queues' => $queues,
      'priority' => $priority,
    }.filter |$k, $v| { !empty($v) and $v != undef },
  }

  $content = {
    'support_ticket' => deep_merge($support_ticket_content, $custom_content)
  }

  if ($server) {
    file { '/etc/ood/config/ondemand.d/support_ticket.yml':
      ensure  => 'file',
      owner   => 'root',
      group   => 'root',
      mode    => '0644',
      content => template("profile/openondemand/common/ondemand.d/support_ticket.yml.erb"),
    }
  }
}
