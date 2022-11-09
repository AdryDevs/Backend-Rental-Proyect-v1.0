'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tvshows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
      },
      release_date: {
        type: Sequelize.DATE
      },
      id_article: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('tvshows', {
      fields: ['id_article'],
      type: 'foreign key',
      name: 'fk_id_article2',
      references: {
        table: 'articles',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tvshows');
  }
};