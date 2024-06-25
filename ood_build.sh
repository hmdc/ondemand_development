#!/bin/bash

OOD_ROOT_URL=${ROOT_URL:-/pun/sys/ood}

cd ondemand/apps/dashboard
bin/bundle config path --local vendor/bundle
echo "Building with PATH=($OOD_ROOT_URL)"
env RAILS_RELATIVE_URL_ROOT="$OOD_ROOT_URL" bin/setup
cd -