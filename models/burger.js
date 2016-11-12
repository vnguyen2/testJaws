var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burgers_table', function(res){
			cb(res)
		});
	},
	create: function (burger_name, cb) {
		orm.create('burgers_table', burger_name, function(res) {
			cb(res)
		});
	},
	nomnom: function(burger_name, cb) {
		orm.update('burgers_table', burger_name, function(res){
			cb(res)
		});
	},
	delete: function(burger_name, cb) {
		orm.delete('burgers_table', burger_name, function(res){
			cd(res)
		});
	},
};

module.exports = burger;