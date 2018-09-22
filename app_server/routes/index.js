const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlMovie = require('../controllers/ctrlMovie'); // ... for the list of World Cup winners (countries)
const ctrlSeries = require('../controllers/ctrlSeries'); // ... for the the list of Golden ball winners (players)

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/movie', ctrlMovie.movielist);  // List of World Cup winners (countries)
router.get('/series', ctrlSeries.serielist);  // List of Golden ball winners (players)

module.exports = router;