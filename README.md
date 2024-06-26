# OnDemand Development

## Local Environment - Checkout, Build, and Deploy
git clone --recurse-submodules https://github.com/hmdc/ondemand_development.git

Build OOD code from the directory: `ondemand/apps/dashboard `.

The build assumes that the application will be deployed as  `/pun/sys/ood `
```
make build-latest-ood
```

We use Docker Compose to deploy locally. We deploy the OOD build, an Request Tracker server, and a Slurm cluster with 2 compute nodes.
Review the [docker-compose.yml](docker-compose.yml) file for more information. To deploy the build locally and start the environment:
```
make start_ood
```

OOD Version 3.1.4 is deployed under: [https://localhost:33000/pun/sys/dashboard](https://localhost:33000/pun/sys/dashboard)

OOD Latest is deployed under: [https://localhost:33000/pun/sys/ood](https://localhost:33000/pun/sys/ood)

Request Tracker with credentials `root` => `password` is deployed under: [http://localhost:34000/](http://localhost:34000/)

The latest version takes around 5 minutes to start up from the first request.

RStudio and Remote Desktop are the only interactive applications deployed in the local environment and they are both functional.

The configuration for the local environment is mounted into the OOD container from the local directory: [config/local](config/local)

## Update OnDemand
Update OnDemand code to the latest version from the HMDC fork: https://github.com/hmdc/ondemand.git

Update the submodule to build from the latest version:
```
git submodule update --init --recursive
git commit -m "Update OnDemand codebase"
```

## Building and Deploying OOD Demo
### Building
This is completed with GitHub actions.

Go to the actions tab in the  `ondemand_development ` project: https://github.com/hmdc/ondemand_development/actions

Select `build-demo` under the `All Workflows` left hand side navigation.

Trigger the action by using the `Run workflow` dropdown, selecting the `main` branch, and clicking `Run workflow` button.

This will create a new workflow to build OOD and the resulting application code will be committed to the `ood_staging_demo` branch.
This build has been configured to be deployed under `/var/www/ood/apps/sys/ood`.

https://github.com/hmdc/ondemand_development/tree/ood_staging_demo

### Deploying With Puppet
To deploy the application with Puppet, we will use the OOD Puppet module functionality to deploy interactive apps.

We need to update the node YAML file for the environment and add the following configuration:
```
openondemand::install_apps:
  'ood':
    ensure: latest
    git_repo: https://github.com/hmdc/ondemand_development.git
    git_revision: ood_staging_demo
```
This addition will be merged with existing values for the `openondemand::install_apps` property.

### Configuration
All the configuration related to the demo installation is stored locally under [config/demo](config/demo) and copied into the build with the GitHub action.


## Docker Images
File: docker/Dockerfile.systemd
Name: Systemd Image
Description: Creates a base image based on Rocky8 with Systemd installed. This is required by Puppet to initialize, start, and configure services.
How to build it:
Build Puppet Image: make docker_systemd

File: docker/Dockerfile.puppet
Name: Puppet Image
Description: Puppet base image based on our Systemd image. This image has Puppet, OOD Puppet module, and all required modules to install OOD.
How to build it:
Build Puppet Image: make docker_puppet

File: N/A
Name: hmdc/sid-ood:ood-3.1.4.el8
Description: OODv3.1.4 installation based on out Puppet image. This is the image used for local development.
This image has been pushed to DockerHub: https://hub.docker.com/r/hmdc/sid-ood/tags

How to build it:
Build Puppet Image: make docker_puppet
Start Puppet Image: make start_ood_installer
Run Puppet and install OOD: make install_ood
Commit new OOD image locally and push to DockerHub: make commit_ood

