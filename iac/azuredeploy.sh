#!/bin/bash

# This file deploys the Bicep templates to Azure. This script will probably be called
# for manual testing, as automatic deployments will use their own pipeline calls.
subscription_name="Sunrisers"
resource_group_name="sunrisersdrumcorps.org"
location_name="eastus2"



# Absolute path of this script.
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
# Personal access token of an admin for the repo.
PERSONAL_ACCESS_TOKEN=$(cat $SCRIPT_DIR/.token)

# Set the subscription for the deployment.
az account set --subscription $subscription_name

# Set the defaults for the deployment.
az config set defaults.location=$location_name default.group=$resource_group_name

# Disconnect the static site.
# NOTE -- A static web app must be disconnected prior to a deployment. This is a known issue.
# NOTE -- Resource group flag required for this command even though the default is set.
# TODO -- Make the disconnection dynamic, and not hard-coded.
az staticwebapp disconnect --name 'devclient' --resource-group $resource_group_name

# Start a deployment.
az deployment group create \
    --template-file $SCRIPT_DIR/main.bicep \
    --resource-group $resource_group_name \
    --mode Complete \
    --parameters env="dev" personalAccessToken=$PERSONAL_ACCESS_TOKEN
    # --what-if \
