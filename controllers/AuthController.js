const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const AuthController = {};

//Login and create token

    AuthController.signIn = async (req, res) => {
        const { email, password } = req.body;
        const userFound = await models.user.findOne({
          where:{ email: email }});
        if (!userFound) {
          res.status(404).json({ message: "Password or email not valid" });
          return;
        }
        const hashedPassword = encryptPassword(password);
        if (hashedPassword !== userFound.password) {
          console.log(email,password);
          res.status(401).json({ message: "Password or email not valid" });
          return;
        }
      
        const secret = process.env.JWT_SECRET || '';
      
        if (secret.length < 10) {
          throw new Error("JWT_SECRET is not set");
        }
      
      /* Creating a JWT token. */
        const jwt = jsonwebtoken.sign({
          id: userFound.id,
          email: userFound.email,
          created: Date.now(),
          role: userFound.id_rol
        }, secret);
      
        res.status(200).json({
          message: "You are logged in",
          jwt: jwt,
        });
      
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