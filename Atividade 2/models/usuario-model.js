const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {

    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,
    },
    email: {
        type: DataTypes.STRING, allowNull: false,
    },
    senha: {
        type: DataTypes.STRING, allowNull: false,
    }

});

Usuario.sync();

module.exports = Usuario;