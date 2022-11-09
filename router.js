const router = require('express').Router();

//Importing controllers
const MovieRouter = require('./views/MovieRouter');
const CategoryRouter = require('./views/CategoryRouter');

//Routes
router.use('/movies', MovieRouter);
router.use('/categories', CategoryRouter);

module.exports = router;