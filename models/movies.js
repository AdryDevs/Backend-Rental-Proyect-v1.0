const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db');

class Movie extends Model {}

Movie.init({
    id_movie: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
}, {
    sequelize,
    modelName: 'movies',
    freezeTableName: true,
    timestamps: false
})


module.exports = Movie
