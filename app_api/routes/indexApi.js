const express = require('express');
const router = express.Router();

const ctrlApiMovie = require('../controllers/ctrlApiMovie');
const ctrlApiSeries = require('../controllers/ctrlApiSeries');

router
    .route('/movie')
    .get(ctrlApiMovie.winnersList)
    .post(ctrlApiMovie.addWinner);


router
    .route('/series')
    .get(ctrlApiSeries.winnersList)
    .post(ctrlApiSeries.addWinner);

module.exports = router;
