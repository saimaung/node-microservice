const mysql = require('mysql2');

const pool = mysql.Pool({
    host: 'localhost',
    db: 'restify',
    user: 'root',
    password: 'supersecret'
});

module.exports = pool.promise();