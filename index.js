const algoliasearch = require('algoliasearch');
const fetch = require('node-fetch');

const client = algoliasearch('0HCA6HLFLT','c22ad8fe09f15afb1ffff10302671bd3');

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