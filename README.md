# OnDemand Development
Project to develop and run Open OnDemand.

Requirements:
 - Docker (Tested with Docker version 24.0.2)
 - Make (Tested with GNU Make 3.81)

## Local Environment - Checkout, Build, and Deploy
Checkout the project pulling the OnDemand codebase as a submodule:
```
git clone --recurse-submodules https://github.com/hmdc/ondemand_development.git
```
The OnDemand codebase will be checkout under the directory `ondemand`.

Build OOD dashboard code from the directory: `ondemand/apps/dashboard `.
The build configures the application to be deployed as `/pun/sys/ood`, required by the location used in our Docker Compose file.
```
make build-latest-ood
```

We use Docker Compose to deploy locally. We deploy the OOD build, a Request Tracker server, and a Slurm cluster with 2 compute nodes.
Review the [docker-compose.yml](docker-compose.yml) file for more information.

To deploy the build locally and start the environment:
```
make start_ood
```

OOD Version 3.1.4 is deployed under: [https://localhost:33000/pun/sys/dashboard](https://localhost:33000/pun/sys/dashboard)

OOD Latest is deployed under: [https://localhost:33000/pun/sys/ood](https://localhost:33000/pun/sys/ood)

Request Tracker with credentials `root` => `password` is deployed under: [http://localhost:34000/](http://localhost:34000/)

The latest version takes around 5 minutes to start up from the first request.

`RStudio` and `Remote Desktop` are the only interactive applications deployed in the local environment and they are both functional.

The configuration for the local environment is mounted into the OOD container from the local directory: [config/local](config/local)

## Update OnDemand
Update OnDemand code to the latest version from the HMDC fork: https://github.com/hmdc/ondemand.git

Update the submodule to build from the latest version:
```
git submodule update --init --recursive
git commit -m "Update OnDemand codebase"
```

## Building and Deploying OOD Demo

### Building OOD as a System Application
The build application is configured to be deployed as a OOD system application under the `/var/www/ood/apps/sys` root folder.
This requires the use of Puppet to deploy the application.

Building the OOD demo as a system application is completed with GitHub actions.
> Note<br>
> The system demo has been configured to work on the Cannon cluster only.


Go to the actions tab in the `ondemand_development ` project: https://github.com/hmdc/ondemand_development/actions

Select `build-demo` under the `All Workflows` left hand side navigation.

Trigger the action by using the `Run workflow` dropdown, selecting the `main` branch, and clicking `Run workflow` button.

This will create a new workflow to build OOD and the resulting application code will be committed to the `ood_staging_demo` branch.
This build has been configured to be deployed under `/var/www/ood/apps/sys/ood`.

https://github.com/hmdc/ondemand_development/tree/ood_staging_demo

#### Deploying With Puppet
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

To access the application in Cannon production use the URL: https://rcood.rc.fas.harvard.edu/pun/sys/ood

#### Configuration
All the configuration related to the demo installation is stored locally under [config/demo](config/demo) and copied into the build with the GitHub action.

### Building OOD as a User Application
The user application is built to be deployed as a development application in OOD.

The build will be completed for the OOD dashboard code under `./ondemand/apps/dashboard`

> Note<br>
> The user demo has been configured to work on the Cannon cluster only.

Building the OOD demo as a user application is completed with Make:
```
make build_user_demo
```

#### Deploying
The deployment is done by copying the OOD application folder to user's OOD development directory, for Cannon is: ` ~/.fasrcood/dev`.

To copy the OOD application code into Cannon, use the following rsync command with your username:
```
rsync -avz --delete --exclude-from='rsync-exclude.conf' ./ondemand/apps/dashboard/ -e ssh <user>@login.rc.fas.harvard.edu:./.fasrcood/dev/ood
```

To access the application in Cannon production use the URL: https://rcood.rc.fas.harvard.edu/pun/dev/ood

## Making changes to OnDemand

make clean


### Update OnDemand code for the development project
```
git submodule update --remote ondemand
git add ondemand
git commit -m "Updated ondemand codebase"
```
### Implement changes to the OnDemand codebase

### Running Tests
In order to run the system tests locally, we need to make changes to the [./ondemand/apps/dashboard/test/application_system_test_case.rb](./ondemand/apps/dashboard/test/application_system_test_case.rb) file.

Add the following options at the beginning of the test, just below the `driven_by` line:
```
options.add_argument('--no-sandbox') unless options.args.include?('--no-sandbox')
options.add_argument('--disable-dev-shm-usage') unless options.args.include?('--disable-dev-shm-usage')
```

Start the OOD tester Docker image:
```
make start_ood_tester
```

This will start the image and install the required libraries for testing. Once completed, we can run tests from the command prompt.

Run the required tests, eg:
```
bundle exec rake test TEST=test/apps/request_tracker_service_test.rb
bundle exec rake test TEST=test/integration/saved_settings_widget_test.rb
bundle exec rake test TEST=test/system/preset_apps_navbar_test.rb
```


## Docker Images
File: docker/Dockerfile.systemd
Name: Systemd Image
Description: Creates a base image based on Rocky8 with Systemd installed. This is required by Puppet to initialize, start, and configure services.
How to build it:
make docker_systemd

File: docker/Dockerfile.puppet
Name: OOD Installer
Description: Puppet base image based on our Systemd image. This image has Puppet, OOD Puppet module, and all required modules to install OOD.
How to build it:
make docker_ood_installer

File: docker/Dockerfile.test
Name: OOD Tester Image
Description: Image based on Ruby and Chromedriver with the required software to run OOD tests.
How to build it:
make docker_ood_tester

File: N/A
Name: hmdc/sid-ood:ood-3.1.4.el8
Description: OODv3.1.4 installation based on out Puppet image. This is the image used for local development.
This image has been pushed to DockerHub: https://hub.docker.com/r/hmdc/sid-ood/tags

How to build it:
Build Puppet Image: make docker_ood_installer
Start Puppet Image: make start_ood_installer
Run Puppet and install OOD: make install_ood
Commit new OOD image locally and push to DockerHub: make commit_ood

