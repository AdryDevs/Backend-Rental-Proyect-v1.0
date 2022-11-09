const router = require('express').Router();

//Importing controllers
const MovieRouter = require('./views/MovieRouter');
const { application } = require('express');

//Routes
router.use('/movies', MovieRouter); 

module.exports = router;