const express = require('express');
const router = express.Router();

const UserRoutes = require('./views/UserRoutes');
// const MoviesRoutes = require('./views/MoviesRoutes');
const SeriesRoutes = require('./views/SeriesRoutes');
const LoanedRoutes = require('./views/LoanedRoutes');

router.use('/users', UserRoutes);
router.use('/movies', MoviesRoutes);
router.use('/series', SeriesRoutes);
router.use('/loaned', LoanedRoutes);

module.exports = router;