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

Build the OOD dashboard code that has been checkout in the directory: `ondemand/apps/dashboard `.
The build process configures the OOD application to be deployed under the URL `/pun/sys/ood`. This URL is required by Docker Compose file that we use to run the application locally.
```
# Build command using make
make build-latest-ood
```

We use Docker Compose to deploy locally. We deploy the OOD dashboard built in the previous step, a Request Tracker server, and a Slurm cluster with 2 compute nodes.
Review the [docker-compose.yml](docker-compose.yml) file for more information.

To deploy the OOD build locally and start the environment execute:
```
make start_ood
```

OOD Version 3.1.4 is deployed under: [https://localhost:33000/pun/sys/dashboard](https://localhost:33000/pun/sys/dashboard)

The OOD build is deployed under: [https://localhost:33000/pun/sys/ood](https://localhost:33000/pun/sys/ood) <br>
The OOD build takes around 5 minutes to start up from the first request.

Both dashboards use the local credentials `ood` => `ood`

Request Tracker with credentials `root` => `password` is deployed under: [http://localhost:34000/](http://localhost:34000/)

`RStudio` and `Remote Desktop` are the only interactive applications deployed in the local environment and they are both functional.

The configuration for the local environment is mounted into the OOD container from the local directory: [config/local](config/local)

## Update OnDemand
Update OnDemand code to the latest version from the HMDC fork: https://github.com/hmdc/ondemand.git

Update the submodule to build from the latest version: [see development section](#update-ondemand-codebase)

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

To access the application in Cannon production use the URL: `https://rcood.rc.fas.harvard.edu/pun/sys/ood`

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
The `ondemand` folder within the project works as a standard Git project.

We can create branches and commit changes. These will get reflected in the HMDC ondemand fork that we use to contribute to OSC.

When making changes to `ondemand`, do not commit the `ondemand` folder in the parent project `ondemand_development` as this will change the reference to the project the changes available to everyone.

Only update the `ondemand_development` project with the latest version of `ondemand` from main to build the OOD demo with the desired OOD version.

<a name="update-ondemand-codebase"></a>
### Update OnDemand code for the development project
First, update the HMDC OOD fork to the latest version of OOD from OSC. This can be done using the Git UI: `https://github.com/hmdc/ondemand`

Then update the reference to the OOD codebase in the `ondemand_development` project. From the project root:
```
git submodule update --remote ondemand
git add ondemand
git commit -m "Updated ondemand codebase"
```

This will update the reference for the OOD codebase within the `ondemand_development` and the GitHub action will build from this version.

### Implement changes to OnDemand and Contribute to OSC
Create a new branch to work with in the ondemand project:
```
cd ondemand
git checkout -b <my_branch>
```

Make the required changes. These changes should be reflected automatically in the local development environment, but some changes might require to restart the accplication.

To restart the application, use the `Help > Restart Web Server` link from the top navigation.

Once the changes are completed and the tests are implemented, commit the changes and raise a Pull Request with OSC:
```
cd ondemand
git add the_files_updated
git commit -m "my message"
```

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
**Name:** OOD Builder <br>
**File:** docker/Dockerfile.builder <br>
**Description:** Creates a Docker image based on Rocky8 with the basic Ruby and NodeJS tooling needed to build OnDemand<br>
**How to build it:**
```
# To build with Ruby v3.1 and NodeJS v18
make docker_ood_builder

# To build with Ruby v3.0 and NodeJS v18
# This is required to deploy alongside the current production version that still uses Ruby v3.0
make docker_ood_builder_r3
```

**Name:** Systemd Image <br>
**File:** docker/Dockerfile.systemd <br>
**Description:** Creates a base image based on Rocky8 with Systemd installed. This is required by Puppet to initialize, start, and configure services. <br>
**How to build it:**
```
make docker_systemd
```

**Name:** OOD Installer <br>
**File:** docker/Dockerfile.puppet <br>
**Description:** Puppet base image based on our Systemd image. This image has Puppet, OOD Puppet module, and all required modules to install OOD. <br>
**How to build it:**
```
make docker_ood_installer
```

**Name:** OOD Tester Image <br>
**File:** docker/Dockerfile.test <br>
**Description:** Image based on Ruby and Chromedriver with the required software to run OOD tests. <br>
**How to build it:**
```
make docker_ood_tester
```

**Name:** hmdc/sid-ood:ood-3.1.4.el8 <br>
**File:** N/A <br>
**Description:** OODv3.1.4 installation based on the OOD installer image. This is the image used for the local development.

To build it, we need to start the OOD installer image and then run Puppet on it:
```
make start_ood_installer
make install_ood
```

This image has been pushed to DockerHub: [https://hub.docker.com/r/hmdc/sid-ood/tags]()


**Name:** Slurm Node Image <br>
**File:** docker/Dockerfile.node <br>
**Description:** Wrapper image to build Slurm cluster locally <br>
**How to build it:** It is build automatically by Docker Compose when the local environment is started.

