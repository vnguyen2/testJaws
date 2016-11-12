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
		host: 'enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'x0c27m6z929hzxc1',
		password: 'sot1flh15qsmi6qe',
		database: 'ovxfj2kpju3vwb0k'
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