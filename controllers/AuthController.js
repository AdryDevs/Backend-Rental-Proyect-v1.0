const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');

const AuthController = {};

//Login and create token

AuthController.signIn = async (req, res) => {
    const { email, password } = req.body;

    const user = await user.findOne({ where: { email } });

    if (!user) {
        return res.status(400).send({ error: 'User not found' });
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Incorrect password' });
    }

    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.expires
    });

    res.send({ user, token });
}

//Register new user and create token

AuthController.signUp = async (req, res) => {
    const { email } = req.body;

    try {
        if (await user.findOne({ where: { email } })) {
            return res.status(400).send({ error: 'User already exists' });
        }

        const user = await user.create(req.body);

        user.password = undefined;

        const token = jwt.sign({ id: user.id }, authConfig.secret, {
            expiresIn: authConfig.expires
        });

        res.send({ user, token });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
}

module.exports = AuthController;