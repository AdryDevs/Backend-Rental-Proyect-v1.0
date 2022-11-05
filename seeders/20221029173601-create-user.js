'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
        {
            gender: "Man",
            age: "1986-03-10",
            telephone: "609006786",
            email: "alonsoadrian86@gmail.com",
            password: "adrian"
        },
        {
            gender: "Man",
            age: "1990-12-20",
            telephone: "660554785",
            email:"palotesperico@gmail.com",
            password: "perico"
        }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
