## IQSS Session Metrics Customizations For OnDemand
The session card changes display the jobs CPU, Memory, and Time efficiency metrics.
When expanded, we display a table with more information about the job.

### Implementation Summary
The implementation consist of two components
- OOD Session Helper extension
- ./initializers/session_helper_extension.rb
- Session card updates and required new templates
- ./views/batch_connect/sessions

For OODv3.x, the version that we currently have in production, we need to use 2 different templates:
 - `./views/batch_connect/sessions/index.v3.html.erb` => `./views/batch_connect/sessions/index.html.erb`
 - `./views/batch_connect/sessions/index.v3.js.erb` => `./views/batch_connect/sessions/index.js.erb`
 - `./views/batch_connect/sessions/index.html.erb` => ignore this file for v3.x

### Deployment
Using the customization feature from OnDemand, with the default location under: `/etc/ood/config/apps/dashboard`
 - copy `./initializers/session_helper_extension.rb` into `/etc/ood/config/apps/dashboard/intializers`
 - copy `./views/batch_connect` into `/etc/ood/config/apps/dashboard/views`

Restart the OnDemand application for the customizations to take effect.

### Deployment With FASRC Puppet
The widget components need to be deployed using FASRC Puppet control repo. We are already using the OOD Puppet module feature to add files to the OOD dashboard location to add/extend functionality:
`openondemand::apps_config_source:`

The folder that we are deploying is: `site-modules/profile/files/openondemand/common/apps_config`

In the Puppet control repo, we need to add the files for the three components to the following folders:
- site-modules/profile/files/openondemand/common/apps_config/dashboard/intializers
- site-modules/profile/files/openondemand/common/apps_config/dashboard/views

The session card updates are disabled by default. To enabled it, add the following property to the root configuration or a profile:
https://github.com/hmdc/ondemand_development/blob/main/dev/session_metrics/metrics.yml

After the updates, the changes can be seen in the Interactive Sessions page: `/pun/sys/dashboard/batch_connect/sessions