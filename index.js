const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js');
const { sequelize } = require('./models');
// const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000; 

//Options for CORS configuration
// var corsOptions = {
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     preflightContinue: false,
//     optionsSuccessStatus: 204
//   };

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
// app.use(cors(corsOptions));

//Routes
app.use(router);

//Connecting to the database
db.then(()=>{
    //Starting server 
    // sequelize.sync ({ force: true }) 
        app.listen(PORT, ()=> console.log(`Server successfully connected on PORT ${PORT}`.blue));
    })
    .catch((err)=> console.log(err.message));   