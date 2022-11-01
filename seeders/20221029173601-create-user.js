'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {({
    mail: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      validate: {
          isEmail: true,
          len: [1, 100]
      }
  },
  picture: DataTypes.STRING,
  gender: DataTypes.ENUM('Male', 'Female','Otro'),
  age: DataTypes.DATEONLY,
  telephone: {
      type: DataTypes.STRING,
      validate: {
          len: [9, 9]
      }
  },
  password: {
      type: DataTypes.STRING,
      validate: {
          len: [1,45]
      }
  }
  })}};