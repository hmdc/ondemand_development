# OnDemand Development

## Checkout and Build
git clone --recurse-submodules https://github.com/hmdc/ondemand_development.git

Build OOD code from the directory: `ondemand/apps/dashboard `.

The build assumes that the application will be deployed as  `/pun/sys/ood `
```
make build-latest-ood
```


## Update OnDemand
Update OnDemand code to the latest version from the HMDC fork: https://github.com/hmdc/ondemand.git

Update the submodule to build from the latest version:
```
git submodule update --init --recursive
git commit -m "Update OnDemand codebase"
```

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

