# OnDemand Development

## Checkout and Build
git clone --recurse-submodules https://github.com/hmdc/ondemand_development.git

make


### Update OnDemand
Update OnDemand code to the latest version from the HMDC fork: https://github.com/hmdc/ondemand.git
git submodule update --init --recursive
git commit -m "Update OnDemand codebase"