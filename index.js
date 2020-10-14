const algoliasearch = require('algoliasearch');
const fetch = require('node-fetch');

const client = algoliasearch('APP_ID','ADMIN_API_KEY');

const index = client.initIndex('demo_ecommerce');

fetch('https://alg.li/doc-ecommerce.json')
  .then(function(response) {
    return response.json()
  })
  .then(function(products) {
    return index.saveObjects(products, {
      autoGenerateObjectIDIfNotExist: true
    })
  })