var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var burger = require('../models/burger.js');

router.use(bodyParser.urlencoded({
  extended: false
}));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req,res) {
	burger.all(function(data){
		var hbsObject = { data : data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/add/', urlencodedParser, function(req,res) {
	var burger_name = req.body.burgerToAdd;
	burger.add(burger_name, function(data){
	res.redirect('/');
	});
});

router.post('/eat/:burger_name', function(req,res) {
	var burger_name = req.params.burger_name;
	burger.eat(burger_name, function(data){
	res.redirect('/');
	});
});

module.exports = router;