const express = require('express');
const router = express.Router();

const TvShowController = require('../controllers/TvShowsControllers');

// Endpoints
router.get('/', TvShowController.getAll);
router.get('/byId/:id', TvShowController.getById);
router.get('/name/:title', TvShowController.getByTitle);
router.post('/topRated', TvShowController.getTopRated);
router.post('/next7Days', TvShowController.getNext7Days);

module.exports = router;