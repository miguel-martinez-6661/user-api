'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john.doe@willdom.com',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Demo User',
        email: 'demo.user@willdom.com',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
