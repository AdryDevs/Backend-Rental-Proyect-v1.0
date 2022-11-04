const express = require('express');
const router = express.Router();

const UserRoutes = require('./views/UserRoutes');
const MoviesRoutes = require('./views/MoviesRoutes');
const SeriesRoutes = require('./views/SeriesRoutes');

router.use('/users', UserRoutes);
router.use('/movies', MoviesRoutes);
router.use('/series', SeriesRoutes);

module.exports = router;