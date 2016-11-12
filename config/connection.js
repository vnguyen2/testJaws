var mysql = require('mysql');

var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	},
	jawsDB: {
		port: 3306,
		host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'z8685p3q4g91axid',
		password: 'h0bfgqmcp8g5zoru',
		database: 'vrdvw85q1f5m4sbq'
	}
}

var connection = mysql.createConnect(source, jawsDB);

connection.connect(function(err) {
	if (err) {
		console.error('Error connecting: ' + err.stack);
		return;
	}
	console.log('Connected as id ' + connection.threadID);
});

module.exports = connection;