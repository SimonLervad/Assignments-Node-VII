var express = require('express');
var router = express.Router();
var con = require('../public/javascripts/continents.js');
console.log(con);

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.params);
	console.log(req.body);
	console.log(req.url);
	console.log(req.query);
	res.render('index', { title: 'Dust test' });
});
router.get('/about', function(req, res, next) {
	console.log(req.params);
	console.log(req.body);
	console.log(req.url);
	console.log(req.query);
	res.render('about', { title: 'About' });
});
router.get('/continents', function(req, res, next) {
	res.render('continents', { title: 'Continents', obj: con});
});

module.exports = router;
