const router = require('express').Router();
const { textSearch } = require('./../services/beerSearch');
const { getUserProfile, getAllUsers } = require('./../models/userData');



const sendResponse = (req, res) => res.json(res.data);
