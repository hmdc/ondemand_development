# default run ood locally
all:: start_ood
.PHONY: start_ood stop_ood clean build_latest_ood build_system_demo start_ood_installer install_ood commit_ood docker_systemd docker_ood_installer docker_ood_tester ssh

WORKING_DIR := $(shell pwd)
CONFIG_DIR := $(WORKING_DIR)/config/local/puppet
PUPPET_DIR := /etc/puppetlabs/code/environments/production

OOD_UID := $(shell id -u)
OOD_GID := $(shell id -g)
OS_IMAGE := rockylinux/rockylinux:8
SID_OOD_IMAGE := hmdc/sid-ood:ood-3.1.7.el8
SID_TEST_IMAGE := hmdc/sid-ood:test-109
SID_BUILDER_IMAGE := hmdc/sid-ood:builder-R3.1
SID_SLURM_IMAGE := hmdc/sid-slurm:v3-slurm-21-08-6-1
RUBY_VERSION := ruby:3.1
ROOT_URL := /pun/sys/ood

ENV := env SID_SLURM_IMAGE=$(SID_SLURM_IMAGE) SID_OOD_IMAGE=$(SID_OOD_IMAGE) OOD_UID=$(OOD_UID) OOD_GID=$(OOD_GID)

build_system_demo build_user_demo: RUBY_VERSION := ruby:3.1
build_system_demo build_user_demo: SID_BUILDER_IMAGE := hmdc/sid-ood:builder-R3.1
build_user_demo: ROOT_URL := /pun/dev/ood

start_ood: stop_ood
	$(ENV) docker compose up --build || :

stop_ood:
	$(ENV) docker compose down -v || :

clean:
	rm -rf ./ondemand/apps/dashboard/data
	rm -rf ./ondemand/apps/dashboard/node_modules
	rm -rf ./ondemand/apps/dashboard/vendor/bundle
	rm -rf ./ondemand/apps/dashboard/app_overrides
	rm -rf ./ondemand/apps/dashboard/plugins
	rm -rf ./ondemand/apps/dashboard/.env*

build_latest_ood:
	# BUILD OOD WITH SID OOD IMAGE
	#docker run --rm -v $(WORKING_DIR):/usr/local/app -w /usr/local/app $(SID_OOD_IMAGE) ./ood_build.sh
	# BUILD OOD WITH ROCKY8 IMAGE
	cp -R config/local/dashboard/. ondemand/apps/dashboard
	docker run --rm -v $(WORKING_DIR):/usr/local/app -w /usr/local/app -e ROOT_URL=$(ROOT_URL) $(SID_BUILDER_IMAGE) ./ood_build.sh
build_system_demo build_user_demo: build_latest_ood
    # COPY DEMO CONFIGURATION
	cp -R config/demo/. ondemand/apps/dashboard
	# COPY CUSTOMIZATIONS
	mkdir -p ondemand/apps/dashboard/plugins
	cp -R dev/metrics ondemand/apps/dashboard/plugins/metrics
	cp -R dev/session_metrics ondemand/apps/dashboard/plugins/session_metrics
	cp -R dev/help ondemand/apps/dashboard/plugins/help
	cp -R dev/cluster ondemand/apps/dashboard/plugins/cluster

start_ood_installer:
	docker create --rm --name ood_installer --privileged -p 43000:443 ood_puppet:7.1.0
	docker cp $(CONFIG_DIR)/manifests ood_installer:$(PUPPET_DIR)
	docker cp $(CONFIG_DIR)/data ood_installer:$(PUPPET_DIR)
	docker cp $(CONFIG_DIR)/files ood_installer:$(PUPPET_DIR)
	docker cp $(CONFIG_DIR)/modules/* ood_installer:$(PUPPET_DIR)/modules
	docker start ood_installer
install_ood:
	docker exec -it ood_installer /opt/puppetlabs/bin/puppet agent -t
commit_ood:
	docker commit ood_installer $(SID_OOD_IMAGE)
	docker rm -f ood_installer
	docker push $(SID_OOD_IMAGE)

ssh:
	docker exec -it ood_installer /bin/bash || :

start_ood_tester:
	docker run --rm -it -v $(PWD)/ondemand:/usr/local/app -w /usr/app/local $(SID_TEST_IMAGE) || :

docker_systemd:
	docker build -t rocky_systemd:8 -f docker/Dockerfile.systemd .

docker_ood_installer:
	docker build -t ood_puppet:7.1.0 -f docker/Dockerfile.puppet .
docker_ood_tester:
	docker build -t $(SID_TEST_IMAGE) -f docker/Dockerfile.test .
docker_ood_builder:
	docker build --build-arg RUBY_VERSION=ruby:3.1 -t hmdc/sid-ood:builder-R3.1 -f docker/Dockerfile.builder .
docker_ood_builder_r3:
	docker build --build-arg RUBY_VERSION=ruby:3.3 --build-arg NODE_VERSION=nodejs:20 -t hmdc/sid-ood:builder-R3.3 -f docker/Dockerfile.builder .