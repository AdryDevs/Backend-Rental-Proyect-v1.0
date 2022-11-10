const router = require('express').Router();

const { application } = require('express');

//Importing routers
const MovieRouter = require('./views/MovieRouter');
const TvShowRouter = require('./views/TvShowRouter');
const UserRouter = require('./views/UserRouter');

//Middlewares
const auth = require('./middlewares/auth');


//Routes
router.use('/movies', auth, MovieRouter);
router.use('/tvshows', auth, TvShowRouter);
router.use('/users', UserRouter);

module.exports = router;