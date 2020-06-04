const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email_address: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;