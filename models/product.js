const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sku: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Product;