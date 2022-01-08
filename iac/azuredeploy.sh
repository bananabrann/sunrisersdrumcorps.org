#!/bin/bash

# This file deploys the Bicep templates to Azure. This script will probably be called
# for manual testing, as automatic deployments will use their own pipeline calls.

env="$1"
if [ -z "$env" ]
then
    echo "\$dev is empty! Please provide an environment name."
    exit
fi

resource_group_name="sunrisersdrumcorps-$env.org"

# Absolute path of this script.
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
# Personal access token of an admin for the repo.
PERSONAL_ACCESS_TOKEN=$(cat $SCRIPT_DIR/.token)
LOCATION_NAME="eastus2"
SUBSCRIPTION_NAME="Sunrisers"




# Set the subscription for the deployment.
az account set --subscription $SUBSCRIPTION_NAME

# Set the-$env defaults for the deployment.
az config set defaults.location=$LOCATION_NAME default.group=$resource_group_name



# Disconnect the static site.
# NOTE -- A static web app must be disconnected prior to a deployment. This is a known issue.
# NOTE -- Resource group flag required for this command even though the default is set.
# TODO -- Make the disconnection dynamic, and not hard-coded.
# az staticwebapp disconnect --name 'devclient' --resource-group $resource_group_name


az group create \
    --location $LOCATION_NAME \
    --name $resource_group_name


# Start a resource group -level deployment.
az deployment group create \
    --template-file $SCRIPT_DIR/main.bicep \
    --resource-group $resource_group_name \
    --mode Complete \
    --parameters env=$env personalAccessToken=$PERSONAL_ACCESS_TOKEN
    # --what-if
