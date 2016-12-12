"use strict";

// REQUIREMENTS!!!
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()

// Declaring the routes to use them later
const homeRoute   = require("./routes/homeRoute");

// Google Auth
const session = require('express-session');
const google = require('googleapis');
const gmail = google.plus('v1');
//configure session cookie
app.use(session({
  secret: 'secret_eorivj340g45j9g4509j9wcr',
    resave: true,
    saveUninitialized: false,
    secure: false
}));

// ??? whats this for ???
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());

// To Know in what PORT the server is on
const PORT = process.env.PORT || 3001;

// serve landing page
app.use('/', express.static(path.join(__dirname, 'views/')));


//check that the server is running
app.listen(PORT, () => console.log('server is running @', PORT));

// Routes to direct the path of the browsers
app.use("/json", homeRoute);
