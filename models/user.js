'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasOne(models.role, {foreignKey: 'id'});
    }
  }
  user.init({
    id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};