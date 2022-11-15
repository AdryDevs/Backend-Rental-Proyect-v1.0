const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; 

//Options for CORS configuration
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    preflightContinue: false,
    // allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization",
    optionsSuccessStatus: 204
};

//Middleware
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(cors(corsOptions));

//Routes
app.use(router);

//Connecting to the database
db.then(()=>{
    //Starting server
        app.listen(PORT, ()=> console.log(`Server successfully connected on PORT ${PORT}`.blue));
    })
    .catch((err)=> console.log(err.message));   