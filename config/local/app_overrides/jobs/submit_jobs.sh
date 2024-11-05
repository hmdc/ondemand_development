#!/bin/bash

users='ood'
opmodes='sleep stress timeout'

for ((node_count=1; node_count <= 2; node_count++)); do
    for user in $users; do
        for mode in $opmodes; do
                su - ood -c "sbatch -n $node_count --job-name=$user_$script_$node_count --export='ALL,MODE='$mode /etc/ood/config/apps/ood/jobs/example_job.sbatch"
        done
    done
done