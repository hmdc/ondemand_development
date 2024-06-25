#!/bin/bash

RUBY_MODULE=${RUBY:-ruby:3.1}
NODE_MODULE=${NODE:-nodejs:18}

dnf -y update
dnf install -y dnf-utils
dnf config-manager --set-enabled powertools
echo "Enabling modules - Ruby($RUBY_MODULE) NodeJS($NODE_MODULE)"
dnf -y module enable "$NODE_MODULE" "$RUBY_MODULE"
dnf install -y nodejs ruby ruby-devel make
dnf install -y epel-release
dnf install -y gcc gcc-c++ libyaml-devel nc
dnf clean all && rm -rf /var/cache/dnf/*
gem install rake

./ood_build.sh