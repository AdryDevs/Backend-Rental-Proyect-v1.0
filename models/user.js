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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  

// Check if user is Admin

user.isAdmin = function(roles) {
  let tmpArray = [];
  roles.forEach(role => {
    tmpArray.push(role.role);
  });
  return tmpArray.includes("admin");
}
return user;
};


