## IQSS Metrics Widget For OnDemand
Open OnDemand metrics widget displaying information about fairshare, job status summary, memory, CPU, GPU, and time. Data is retrieved directly from Slurm using the `sacct` and `sshare` commands.

The metrics widget consist of four panels:
- Fairshare
- CPU Jobs by state
- GPU Jobs by state
- Jobs Stats Summary

### Implementation Summary
The implementation consist of three components
- OOD Slurm adapter extension
- ./initializers/slurm_extension.rb
- Metrics calculations utility classes
- ./lib/slurm_metrics
- Metrics widget templates
- ./views/widgets/metrics

### Deployment
Using the customization feature from OnDemand, with the default location under: `/etc/ood/config/apps/dashboard`
 - copy `./initializers/slurm_extension.rb` into `/etc/ood/config/apps/dashboard/intializers`
 - copy `./lib/slurm_metrics` into `/etc/ood/config/apps/dashboard/lib`
 - copy `./views/widgets/metrics` into `/etc/ood/config/apps/dashboard/views/widgets`

Restart the OnDemand application for the customizations to take effect.

### Deployment With FASRC Puppet
The widget components need to be deployed using FASRC Puppet control repo. We are already using the OOD Puppet module feature to add files to the OOD dashboard location to add/extend functionality:
`openondemand::apps_config_source:`

The folder that we are deploying is: `site-modules/profile/files/openondemand/common/apps_config`

In the Puppet control repo, we need to add the files for the three components to the following folders:
- site-modules/profile/files/openondemand/common/apps_config/dashboard/intializers
- site-modules/profile/files/openondemand/common/apps_config/dashboard/lib
- site-modules/profile/files/openondemand/common/apps_config/dashboard/views/widgets

To review and test the new widget, we could use a custom page to display it. This is a sample configuration:
https://github.com/hmdc/ondemand_development/blob/main/config/local/ondemand.d/metrics.yml

This will create a custom page under: `/pun/sys/dashboard/custom/metrics