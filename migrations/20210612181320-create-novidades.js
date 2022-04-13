'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Novidades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      novidade_type: {
        type: Sequelize.ENUM,
        values: ["banner", "banner-redirect", "blog", "imprensa"]
      },
      image: {
        type: Sequelize.TEXT()
      },
      publish_date: {
        type: Sequelize.TEXT()
      },
      link: {
        type: Sequelize.TEXT()
      },
      author: {
        allowNull: false,
        type: Sequelize.TEXT()
      },
      author_depto: {
        allowNull: false,
        type: Sequelize.TEXT()
      },
      category: {
        type: Sequelize.TEXT()
      },
      title: {
        type: Sequelize.TEXT()
      },
      title_text: {
        type: Sequelize.TEXT()
      },
      original_text: {
        type: Sequelize.TEXT()
      },
      active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      display_home_order: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Novidades');
  }
};