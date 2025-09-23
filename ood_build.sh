#!/bin/bash

OOD_ROOT_URL=${ROOT_URL:-/pun/sys/ood}

cd ondemand/apps/dashboard
bin/bundle config path --local vendor/bundle
bin/bundle config set build.nokogiri --use-system-libraries
bin/bundle config set force_ruby_platform true
echo "Building with PATH=($OOD_ROOT_URL)"
env RAILS_RELATIVE_URL_ROOT="$OOD_ROOT_URL" bin/setup
cd -