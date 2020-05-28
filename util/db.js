const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize(
    'restify',
    'sai',
    'supersecret', {
        dialect: 'mysql',
        host: 'db'
    });

module.exports = sequelize;