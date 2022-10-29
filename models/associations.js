/* Importing the models. */

const Rol = require('./rol');
const User = require('./user');


/* Creating a many-to-many relationship between the User and Rol models. */

User.belongsToMany(Rol, { through: "user-rol" });
Rol.belongsToMany(User, { through: "user-rol" });