const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Serie extends Model { }

Serie.init({
    id_serie: {
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
    modelName: 'series',
    freezeTableName: true,
    timestamps: false
})

module.exports = Serie