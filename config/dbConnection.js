const mysql = require('mysql');

const connMySQL = function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'Luluzinha300',
			database : 'rotary_club'
		});
}

module.exports = function () {
	return connMySQL;
}