const express = require('express');
const app = express();
const db = require('./db/db');
const router = require('./router');
require('./models/associations'); 
require('dotenv').config();
console.log(process.env);

const PORT = 3000;

//middleware

app.use(express.json());
app.use(router);

// Listening to the port 3000 and logging a message to the console

app.listen(PORT, () => {
    console.log(`Server amazingly running on port ${PORT}, all good!!`);
    db.sync().then(()=> {
        console.log("Successfully authenticated to the database located at Railway");
    }).catch(error => {
        console.log('Connection to the database refused due to ' + error)
    })
});
