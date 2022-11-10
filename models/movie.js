'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movie.belongsTo(models.article, {foreignkey: 'id'})
    }
  }
  movie.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    release_date: DataTypes.DATE,
    onCinemas: DataTypes.BOOLEAN,
    genre: DataTypes.STRING,
    articleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie',
    freezeTableName: true,
    timestamps: false
  });
  return movie;
};