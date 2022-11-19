const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const { user } = require('../models');

module.exports = (req, res, next) => {

    // Look for the token in the request header
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "No token found" });
    } else {

        // Check if the token is valid
        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, authConfig.secret, (err, decoded) => {

            if(err) {
                res.status(500).json({ msg: "Not a valid token", err });}
            //  else {
                
            //     user.findByPk(decoded.user.id, { include: "roles" }).then(user => {
            //         //console.log(user.roles);
            //         req.user = user;
            //         next();
            //     });
            // }

        })
    }

};