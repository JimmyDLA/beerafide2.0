const fetch = require('node-fetch');

function textSearch(req, res, next) {
  searchTerms = req.body.searchTerms;
  const API_ENDPOINT = `https://api.brewerydb.com/v2/search?q=${searchTerms}&type=beer&key=${process.env.BREWERY_DB_KEY}&format=json`;
  fetch(API_ENDPOINT)
  .then((r) => r.json())
  .then((data) => {
    res.data = data;
    next();
  })
  .catch((err) => {
    console.log(`-->Text Search Error: ${err}`);
    next(err);
  })
}

module.exports = { textSearch }
