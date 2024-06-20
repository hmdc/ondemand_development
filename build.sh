#!/bin/bash

RUBY_MODULE=${RUBY:-ruby:3.1}
NODE_MODULE=${NODE:-nodejs:18}
OOD_ROOT_URL=${ROOT_URL:-/pun/sys/ood}

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

cd ondemand/apps/dashboard
bin/bundle config path --local vendor/bundle
echo "Building with PATH=($OOD_ROOT_URL)"
env RAILS_RELATIVE_URL_ROOT="$OOD_ROOT_URL" bin/setup
cd -
mkdir -p ./target
tar -czf ./target/ood-demo.tar.gz ./ondemand/apps/dashboard