var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'employeedb',
    user: 'root',
    password: 'everest198'
});

module.exports = connection;