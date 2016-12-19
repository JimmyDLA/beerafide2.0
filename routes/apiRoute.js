const router = require('express').Router();
const path require('path');
const { textSearch , webIDSearch } = require('./../services/beerSearch');
const { getUserProfile, getAllUsers } = require('./../models/userData');

const sendResponse = (req, res) => res.json(res.data);

router.use(express.static(path.join(__dirname, 'views')));


router.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.route('/beerSearch')
  .post(textSearch, sendResponse);

router.route('/oneBeerSearch')
  .post(webIDSearch, sendResponse);

  module.exports = router;
