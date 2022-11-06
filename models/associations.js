// Importing the models

const Rol = require('./rol');
const User = require('./user');
const Movies = require('./movies');
const Series = require('./series'); 
const Loaned = require('./loaned');
const Loans = require('./loans');

// Defining the associations

Series.hasMany(Movies, {throught: 'articles'});
Movies.belongsTo(Series, {throught: 'articles'});



Articles.hasOne(Loaned);
Loaned.belongsTo(Articles);

Loans.hasMany(Loaned);
Loaned.belongsTo(Loans);

User.hasMany(Loans), {throught: loaned};
Loans.belongsTo(User), {throught: loaned};

Rol.hasMany(User);
User.belongsTo(Rol);

module.exports = { 
    User,
    Rol,
    Movies,
    Series,
    Loaned,
    Loans
 };


