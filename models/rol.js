const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Rol extends Model { }

Rol.init({
  id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  nombre: DataTypes.STRING
}, {
  sequelize,
  modelName: 'rol',
  freezeTableName: true,
  timestamps: false
})

module.exports = Rol