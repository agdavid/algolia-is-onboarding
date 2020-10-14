const algoliasearch = require('algoliasearch');
const fetch = require('node-fetch');

const client = algoliasearch('APP_ID','ADMIN_API_KEY');

const index = client.initIndex('demo_ecommerce');

// Step 1: indexing script
// fetch('https://alg.li/doc-ecommerce.json')
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(products) {
//     return index.saveObjects(products, {
//       autoGenerateObjectIDIfNotExist: true
//     })
//   })

// Step 2: relevance script
index.setSettings({
    // select attributes for search
    searchableAttributes: ['brand', 'name', 'categories', 'description'],
    // business metrics for custom ranking
    customRanking: ['desc(popularity)'] ,
    // select attributes for filtering
    attributesForFaceting: ['categories', 'searchable(brand)', 'price']
})