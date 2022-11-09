const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js');

const app = express();
const PORT = process.env.PORT || 3000; 

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());

//Routes
app.use(router);

//Connecting to the database
db.then(()=>{
    //Starting server
        app.listen(PORT, ()=> console.log(`Server successfully connected on PORT ${PORT}`.blue));
    })
    .catch((err)=> console.log(err.message));   