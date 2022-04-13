'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) { }
  };
  Usuarios.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    departamento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Usuarios',
  });

  Usuarios.beforeCreate(async (usuario, options) => {
    const salt = await bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(usuario.password, salt);
  });

  return Usuarios;
};