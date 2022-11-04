// Importing the models

const Rol = require('..models/rol');
const User = require('..models/user');
const Movies = require('..models/movies');
const Series = require('..models/series'); 


// Creating a many-to-many relationship between the User and Rol models

User.belongsToMany(Rol, { through: "user-rol" });
Rol.belongsToMany(User, { through: "user-rol" });

// Creating a one-to-many relationship between the User and Movies models

User.hasMany(Movies, { foreignKey: 'id_user' });
Movie.belongsTo(User, { foreignKey: 'id_user' });

// Creating a one-to-many relationship between the User and Serie models

User.hasMany(Series, { foreignKey: 'id_user' });
Series.belongsTo(User, { foreignKey: 'id_user' });

module.exports = { 
    User,
    Rol,
    Movies,
    Series };


