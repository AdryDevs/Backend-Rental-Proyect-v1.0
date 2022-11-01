'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      mail: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      picture: Sequelize.STRING,
      gender: Sequelize.ENUM('Hombre', 'Mujer', 'Otro'),
      age: Sequelize.DATEONLY,
      telephone: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });

  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
