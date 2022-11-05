const { DataTypes, Model, DATE } = require('sequelize')
const sequelize = require('../db/db')

class Loaned extends Model {}

Loaned.init({
    id_loaned: {
        type: STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    createdAt: DATE,
    updatedAt: DATE
}, {
    sequelize,
    modelName: 'loaned',
    freezeTableName: true,
    timestamps: false
})

module.exports = Loaned

