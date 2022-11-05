'use strict';

const { DATEONLY } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'The Shawshank Redemption',
        year: '1994-10-14',
        rating: 9.3,
        future_cinemas: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Godfather',
        year: '1972-03-24',
        rating: 7,
        future_cinemas: true,
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
