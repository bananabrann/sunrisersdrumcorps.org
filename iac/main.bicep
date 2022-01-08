@description('The location the resources should be deployed to.')
param location string = resourceGroup().location

@description('The project repository the site lives at.')
param repoUrl string = 'https://github.com/SunrisersDB/sunrisersdrumcorps.org'

@description('The environment of the infrastructure.')
@allowed([
  'dev'
  'prod'
])
param env string

@description('Personal access token of an admin for the given repo.')
param personalAccessToken string

module storageAccount 'modules/storageAccount.bicep' = {
  name: 'storageAccount'
  params: {
    defaultTags: {}
    location: location
    env: env
  }
}

// module clientStaticSite 'modules/staticSite.bicep' = {
//   name: 'clientStaticSite'
//   params: {
//     env: env
//     defaultTags: {}
//     location: location
//     repoUrl: repoUrl
//     personalAccessToken: personalAccessToken
//   }
// }

// output clientStaticSiteHostName string = clientStaticSite.outputs.clientStaticSiteHostName
