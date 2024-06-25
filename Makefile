# default build target
all:: build-latest-ood
.PHONY: up down build-latest-ood release-demo ood_installer build_ood docker-puppet ssh

OS_IMAGE := rockylinux/rockylinux:8
WORKING_DIR := $(shell pwd)
CONFIG_DIR := $(WORKING_DIR)/config/local/puppet
PUPPET_DIR := /etc/puppetlabs/code/environments/production

OOD_UID := $(shell id -u)
OOD_GID := $(shell id -g)
SID_OOD_IMAGE := hmdc/sid-ood:ood-3.1.4.el8
SID_SLURM_IMAGE := hmdc/sid-slurm:v3-slurm-21-08-6-1

ENV := env SID_SLURM_IMAGE=$(SID_SLURM_IMAGE) SID_OOD_IMAGE=$(SID_OOD_IMAGE) OOD_UID=$(OOD_UID) OOD_GID=$(OOD_GID)

up: down
	$(ENV) docker-compose up --build

down:
	$(ENV) docker-compose down -v || :

build-latest-ood:
	# BUILD OOD WITH SID OOD IMAGE
	#docker run --rm -v $(WORKING_DIR):/usr/local/app -w /usr/local/app $(SID_OOD_IMAGE) ./ood_build.sh
	# BUILD OOD WITH ROCKY8 IMAGE
	docker run --rm -v $(WORKING_DIR):/usr/local/app -w /usr/local/app $(OS_IMAGE) ./rocky8_build.sh

release-demo: build-latest-ood
	mkdir -p ./target
	tar -czf ./target/ood-demo.tar.gz -C ./ondemand/apps dashboard

ood_installer:
	docker create --rm --name ood_installer --privileged -p 34000:443 ood_puppet:5.0.1
	docker cp $(CONFIG_DIR)/manifests ood_installer:$(PUPPET_DIR)
	docker cp $(CONFIG_DIR)/data ood_installer:$(PUPPET_DIR)
	docker cp $(CONFIG_DIR)/files ood_installer:$(PUPPET_DIR)
	docker start ood_installer

build_ood:
	docker exec -it ood_installer /opt/puppetlabs/bin/puppet agent -t || :
	docker commit ood_installer $(SID_OOD_IMAGE)

ssh:
	docker exec -it ood_installer /bin/bash || :

docker-build:
	docker build -t rocky_systemd:8 -f Dockerfile.systemd .
	docker build -t ood_puppet:8 -f Dockerfile.puppet .

docker-puppet:
	docker build -t ood_puppet:5.0.1 -f docker/Dockerfile.puppet .