'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Novidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Novidades.init({
    novidade_type: {
      type: DataTypes.ENUM,
      values: ["banner", "banner-redirect", "blog", "imprensa"]
    },
    image: {
      type: DataTypes.STRING(4000),
    },
    publish_date: {
      type: DataTypes.STRING(4000),
    },
    link: {
      type: DataTypes.STRING(4000),
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING(4000),
    },
    author_depto: {
      allowNull: false,
      type: DataTypes.STRING(4000),
    },
    category: {
      type: DataTypes.STRING(4000),
    },
    title: {
      type: DataTypes.STRING(4000),
    },
    title_text: {
      type: DataTypes.STRING(4000),
    },
    original_text: {
      type: DataTypes.TEXT(),
    },
    active: {
      allowNull: false,
      type: DataTypes.BOOLEAN(),
    },
    display_home_order: {
      allowNull: true,
      type: DataTypes.INTEGER()
    }
  }, {
    sequelize,
    modelName: 'Novidades',
  });
  return Novidades;
};