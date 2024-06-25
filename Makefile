# default build target
all:: build-latest-ood
.PHONY: up down build-latest-ood ood_installer build_ood docker-puppet ssh

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

build_latest_ood:
	# BUILD OOD WITH SID OOD IMAGE
	#docker run --rm -v $(WORKING_DIR):/usr/local/app -w /usr/local/app $(SID_OOD_IMAGE) ./ood_build.sh
	# BUILD OOD WITH ROCKY8 IMAGE
	docker run --rm -v $(WORKING_DIR):/usr/local/app -w /usr/local/app $(OS_IMAGE) ./rocky8_build.sh

start_ood_installer:
	docker create --rm --name ood_installer --privileged -p 43000:443 ood_puppet:5.0.1
	docker cp $(CONFIG_DIR)/manifests ood_installer:$(PUPPET_DIR)
	docker cp $(CONFIG_DIR)/data ood_installer:$(PUPPET_DIR)
	docker cp $(CONFIG_DIR)/files ood_installer:$(PUPPET_DIR)
	docker start ood_installer
install_ood:
	docker exec -it ood_installer /opt/puppetlabs/bin/puppet agent -t
commit_ood:
	docker commit ood_installer $(SID_OOD_IMAGE)
	docker rm -f ood_installer
	docker push $(SID_OOD_IMAGE)

ssh:
	docker exec -it ood_installer /bin/bash || :

docker_systemd:
	docker build -t rocky_systemd:8 -f Dockerfile.systemd .

docker_puppet:
	docker build -t ood_puppet:5.0.1 -f docker/Dockerfile.puppet .