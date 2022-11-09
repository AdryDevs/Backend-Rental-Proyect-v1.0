'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      id_role: {
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
    await queryInterface.addConstraint('users', {
      fields: ['id_role'],
      type: 'foreign key',
      name: 'fkey_id_role',
      references: {
        table: 'roles',
        field: 'id'
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};