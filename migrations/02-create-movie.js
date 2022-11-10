'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movie', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      release_date: {
        type: Sequelize.DATE
      },
      onCinemas: {
        type: Sequelize.BOOLEAN
      },
      genre: {
        type: Sequelize.STRING
      },
      articleId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('movie', {
      fields: ['articleId'],
      type: 'foreign key',
      name: 'fk_id_article',
      references: {
        table: 'articles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movie');
  }
};