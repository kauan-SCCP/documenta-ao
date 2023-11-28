const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {

    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,
    },
    produto: {
        type: DataTypes.STRING, allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING, allowNull: false,
    },
    preco: {
        type: DataTypes.FLOAT, allowNull: false,
    },
});

Produto.sync();

module.exports = Produto;