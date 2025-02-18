## Support Ticket - ServiceNow Integration
This is a customization to add the ServiceNow backend implementation for the OOD Support Ticket feature.

This code has already been merged into OOD main codebase, but it hasn't been released yet (January 2025).

Once we upgrade to the OOD version with the ServiceNow integration, we can discard this customization.

### Implementation Summary
The implementation consists of these components
- OOD UserConfiguration extension
- ./initializers/user_configuration_extension.rb
- ServiceNow service and client classes
- ./lib
- Payload content template
- ./views/support_ticket/servicenow/servicenow_content.text.erb

### Deployment
Using the customization feature from OnDemand, with the default location under: `/etc/ood/config/apps/dashboard`
- copy `./initializers/user_configuration_extension.rb` into `/etc/ood/config/apps/dashboard/intializers`
- copy the files inside `./lib` into `/etc/ood/config/apps/dashboard/lib`
- copy `./views/support_ticket/servicenow/servicenow_content.text.erb` into `/etc/ood/config/apps/dashboard/views/support_ticket/servicenow`

Restart the OnDemand application for the customizations to take effect.

### Deployment With FASRC Puppet
The ServiceNow integration needs to be deployed using FASRC Puppet control repo. We are already using the OOD Puppet module feature to add files to the OOD dashboard location to add/extend functionality:
`openondemand::apps_config_source:`

The folder that we are deploying is: `site-modules/profile/files/openondemand/common/apps_config`

In the Puppet control repo, we need to add the files for this customization to the following folders:
- site-modules/profile/files/openondemand/common/apps_config/dashboard/intializers
- site-modules/profile/files/openondemand/common/apps_config/dashboard/lib
- site-modules/profile/files/openondemand/common/apps_config/dashboard/views

Verify the deployment in the OOD server:
 - `/etc/ood/config/apps/dashboard/intializers`
 - `/etc/ood/config/apps/dashboard/lib`
 - `/etc/ood/config/apps/dashboard/views`

The support ticket YAML configuration is managed by the `profile::openondemand::ood_support_ticket` class.
We need to add the following puppet configuration for ServiceNow:
```
# "guest" = 5136503cc611227c0183e96598c4f706
# "troubleshooting" = 4e7017196fc5c100a54fa981be3ee4c9
# "FAS RC - IQSS Support" = 091302291b9302509ebaca262a4bcb21
# "FAS Research Computing Services > IQSS Support > IQSS Triage" = b63f3ded1b5302509ebaca262a4bcbfe   
profile::openondemand::ood_support_ticket::server: 'https://localhost'
profile::openondemand::ood_support_ticket::custom_content:
  servicenow_api:
    map:
      u_email_source: "email"
      watch_list: "cc"
    payload:
      caller_id: "5136503cc611227c0183e96598c4f706"
      u_category: "4e7017196fc5c100a54fa981be3ee4c9"
      contact_type: "External System"
      assignment_group: "091302291b9302509ebaca262a4bcb21"
      u_business_service: "b63f3ded1b5302509ebaca262a4bcbfe"
```

Verify the deployment in the OOD server:
 - `/etc/ood/config/ondemand.d/support_ticket.yml`

As well, to configure the Apache reverse proxy to connect to ServiceNow and manage the API key, we need to update the `openondemand::custom_vhost_directives` array property.

```
# ServiceNow Test: "https://harvardtest.service-now.com"
# ServiceNow Prod: "https://harvard.service-now.com"
openondemand::custom_vhost_directives:
- 'SSLProxyEngine on'
- '# FOR FASSE ONLY'
- 'ProxyRemote https://harvard.service-now.com/api/now http://rcproxy.rc.fas.harvard.edu:3128'
- '<Location "/api/now/table/incident">'
- '  ProxyPass "https://harvard.service-now.com/api/now/table/incident"'
- '  RequestHeader set x-sn-apikey "%{lookup("secrets::ondemand::snow_api_key")}"'
- '  <Limit POST>'
- '    Require ip 127.0.0.1 ::1'
- '  </Limit>'
- '  Require all denied'
- '</Location>'
- '<Location "/api/now/attachment/file">'
- '  ProxyPass "https://harvard.service-now.com/api/now/attachment/file"'
- '  RequestHeader set x-sn-apikey "%{lookup("secrets::ondemand::snow_api_key")}"'
- '  <Limit POST>'
- '    Require ip 127.0.0.1 ::1'
- '  </Limit>'
- '  Require all denied'
- '</Location>'
```

Verify on the OnDemand server that the Apache configuration has the right API key value:
```
less /etc/httpd/conf.d/ood-portal.conf
```