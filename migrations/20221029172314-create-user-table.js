'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user-rols', [
      {
        usuarioMail: 'alonsoadrian86@gmail.com',
        rolIdRol: 1,
        createAt: '2022-10-29 19:26:00',
        updateAt: '2022-10-29 19:26:00'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
