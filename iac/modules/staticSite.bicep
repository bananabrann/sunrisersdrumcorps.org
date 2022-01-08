param location string
param repoUrl string
param env string
param personalAccessToken string
param defaultTags object

var targetBranch = (env == 'prod') ? 'main' : 'dev'
var sku = 'Free'

resource clientStaticSite 'Microsoft.Web/staticSites@2021-02-01' = {
  name: '${env}client'
  location: location
  tags: defaultTags
  sku: {
    name: sku
  }
  properties: {
    branch: targetBranch
    repositoryUrl: repoUrl
    repositoryToken: personalAccessToken
  }
}

output clientStaticSiteHostName string = clientStaticSite.properties.defaultHostname
