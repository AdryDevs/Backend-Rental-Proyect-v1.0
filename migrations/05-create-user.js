'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      roleId: {
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
    await queryInterface.addConstraint('user', {
      fields: ['roleId'],
      type: 'foreign key',
      name: 'fkey_roleId',
      references: {
        table: 'roles',
        field: 'id'
  },
  onDelete: 'cascade',
  onUpdate: 'cascade'
});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};