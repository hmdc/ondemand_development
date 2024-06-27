#!/bin/bash

# The OnDemand Dashboard source code root directory needs to be mounted under /usr/local/app
# This is only used to run tests.

cd /usr/local/app
bundle config path ~/vendor/bundle
bundle install
gem install rake
cd apps/dashboard/
bundle install
if [ ! -f "tmp/node_modules/yarn/bin/yarn" ]; then
    echo "INSTALLING YARN"
    npm install --production --prefix tmp yarn
fi

exec "$@"