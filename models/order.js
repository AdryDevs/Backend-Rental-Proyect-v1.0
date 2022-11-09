'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.hasOne(models.article, {foreignKey: 'id'});
      order.hasOne(models.user, {foreignKey: 'id'});
    }
  }
  order.init({
    id: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    id_article: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};