var mysql = require('mysql');
var connection = mysql.createPool({
    host:'localhost',
    port:'8889',
    user:'root',
    password:'root',
    database:'api-node'
});

module.exports = connection;