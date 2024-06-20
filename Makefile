# default build target
all:: build-demo
.PHONY: build-demo

OS_IMAGE := rockylinux/rockylinux:8
WORKING_DIR := $(shell pwd)

remote-fasse staging-fasse prod-fasse:  ENV := env no_proxy=.harvard.edu http_proxy=http://rcproxy.rc.fas.harvard.edu:3128 https_proxy=http://rcproxy.rc.fas.harvard.edu:3128

build-demo:
	docker pull $(OS_IMAGE)
	docker run --rm -it -v $(WORKING_DIR):/usr/local/app -w /usr/local/app $(OS_IMAGE) /bin/bash

test: