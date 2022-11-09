const express = require('express');
const router = express.Router();

//Importo modelo de datos
const MovieController = require('../controllers/MoviesControllers');

// End-points CRUD movies
router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/name/:title', MovieController.getByTitle);
router.post('/', MovieController.create);
router.put('/:id', MovieController.update);
router.delete('/', MovieController.deleteAll);
router.delete('/:id', MovieController.delete);
router.get('/topRated', MovieController.getTopRated);

module.exports = router;