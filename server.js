"use strict";
if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });



// REQUIREMENTS!!!
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// require('dotenv').config()

// ??? whats this for ???
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Declaring the routes to use them later
const apiRoute   = require("./routes/apiRoute");


// To Know in what PORT the server is on
const PORT = process.env.PORT || 3001;

// serve landing page
// app.use('/', express.static(path.join(__dirname, 'views')));



//check that the server is running
app.listen(PORT, () => console.log('server is running @', PORT));

// Routes to direct the path of the browsers
app.use('/api', apiRoute);
app.use('/', apiRoute);
