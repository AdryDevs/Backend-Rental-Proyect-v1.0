const express = require('express');
const router = express.Router();

//Importo modelo de datos
const MovieController = require('../controllers/MoviesControllers');

// End-points CRUD movies
router.get('/', MovieController.getAll);
router.get('/byId/:id', MovieController.getById);
router.get('/name/:title', MovieController.getByTitle);
router.post('/', MovieController.create);

router.get('/topRated', MovieController.getTopRated);

module.exports = router;