// Importing the models

const Rol = require('./rol');
const User = require('./user');
const Movies = require('./movies');
const Series = require('./series'); 
const Articles = require('./articles');


// Creating a many-to-many relationship between the User and Rol models

User.belongsTo(Rol, {foreignKey: 'id_rol'});
Rol.belongsTo(User, {foreignKey: 'id_user'});

// Creating a one-to-many relationship between the User and Movies models

User.hasMany(Movies, { foreignKey: 'id_user' });
Movies.belongsTo(User, { foreignKey: 'id_user' });

// Creating a one-to-many relationship between the User and Serie models

User.hasMany(Series, { foreignKey: 'id_user' });
Series.belongsTo(User, { foreignKey: 'id_user' });

module.exports = { 
    User,
    Rol,
    Movies,
    Series };


