const router = require('express').Router();
const { textSearch , webIdSearch } = require('./../services/beerSearch');
const { getUserProfile, getAllUsers } = require('./../models/userData');

const sendResponse = (req, res) => res.json(res.data);

router.route('/beerSearch')
  .post(textSearch, sendResponse);

router.route('/oneBeerSearch')
  .post(webIdSearch, sendResponse);

  module.exports = router;
