## IQSS Partition Widget For OnDemand
Open OnDemand partition widget displaying information about all the partitions in the Slurm cluster with metrics about partition state, nodes, CPUs, and memory.


### Implementation Summary
The implementation consist of three components
- OOD Slurm adapter and NodeInfo class extensions
- ./initializers
- Partition service and utility classes
- ./lib/slurm_cluster
- Partition widget
- ./views/widgets/cluster


### Deployment
Using the new plugins feature from OnDemand, with the default location under: `/etc/ood/config/plugins`
 - copy the `cluster` folder into `/etc/ood/config/plugins`

Add the partitions widget to the home page or to a new custom page, example in the [cluster.yml](cluster.yml) file

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
https://github.com/hmdc/ondemand_development/blob/main/dev/cluster/cluster.yml

This will create a custom page under: `/pun/sys/dashboard/custom/partitions