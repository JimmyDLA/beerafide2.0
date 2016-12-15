const fetch = require('node-fetch');

function textSearch(req, res, next) {
  searchTerms = req.body.searchTerms;
  const API_ENDPOINT = `https://api.brewerydb.com/v2/search?q=${searchTerms}&type=beer&key=${process.env.BREWERY_DB_KEY}&format=json`;
  console.log(API_ENDPOINT);
  fetch(API_ENDPOINT)
  .then((r) => r.json())
  .then((data) => {
    res.data = data;
    console.log(res.data);
    next();
  })
  .catch((err) => {
    console.log(`-->Text Search Error: ${err}`);
    next(err);
  })
}

function webIDSearch(req, res, next) {
  webID = req.body.webID;
  const API_ENDPOINT = `https://api.brewerydb.com/v2/beer/${webID}?&key=${process.env.BREWERY_DB_KEY}&format=json`;
  console.log("@ services webID = ",webID);
  console.log(API_ENDPOINT);
  fetch(API_ENDPOINT)
  .then((r) => r.json())
  .then((data) => {
    res.data = data;
    console.log(res.data);
    next();
  })
  .catch((err) => {
    console.log(`-->Text Search Error: ${err}`);
    next(err);
  })
}

module.exports = { textSearch, webIDSearch }
