const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // Check if token exists
    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided' });
    }
    // Check if token is valid
    const parts = authHeader.split(' ');

    if (!parts.length === 2) {
        return res.status(401).send({ error: 'Token error' });
    }   
    // Check if token is Bearer
    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token malformatted' });
    }
    // Check if token is valid
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ error: 'Token invalid' });
        }

        req.userId = decoded.id;

        return next();
    });
}