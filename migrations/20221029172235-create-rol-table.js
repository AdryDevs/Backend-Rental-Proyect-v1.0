'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('rol', [
      {
        id_rol: 1,
        nombre: "admin"
      },
      {
        id_rol: 2,
        nombre: "user"
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete
  }
};
