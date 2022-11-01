const express = require('express')
const router = express.Router()

const UserRoutes = require('./views/UserRoutes')
// const ArticlesRoutes = require('./views/ProfileRoutes')


// Importing the routes from the routes folder and then using it in the router
router.use('/user', UserRoutes)
// router.use('/articles', ArticlesRoutes)


module.exports = router