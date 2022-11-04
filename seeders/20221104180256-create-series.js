'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Series', [
      {
        title: 'The Wire',
        year: '2002-06-02',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Sopranos',
        year: '1999-01-10',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
