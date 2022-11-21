const express = require('express');
const router = express.Router();


const MovieController = require('../controllers/MoviesControllers');

// Endpoints
router.get('/', MovieController.getAll);
router.get('/byId/:id', MovieController.getById);
router.get('/title/:title', MovieController.getByTitle);
router.get('/topRated', MovieController.getTopRated);
router.get('/genre/:genre', MovieController.getByGenre);

module.exports = router;