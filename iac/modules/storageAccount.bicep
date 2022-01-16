param location string
param env string
param defaultTags object

resource sunrisersStorageAccount 'Microsoft.Storage/storageAccounts@2021-06-01' = {
  name: '${env}storage${uniqueString(resourceGroup().id)}'
  location: location
  tags: defaultTags
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}

resource tableService 'Microsoft.Storage/storageAccounts/tableServices@2021-06-01' = {
  name: 'default'
  parent: sunrisersStorageAccount
}

resource newsTable 'Microsoft.Storage/storageAccounts/tableServices/tables@2021-06-01' = {
  name: 'news'
  parent: tableService
}

output storageAccount object = sunrisersStorageAccount
