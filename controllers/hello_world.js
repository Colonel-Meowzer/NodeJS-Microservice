// hello_world.js
var models  = require('../models');

var list = function(req, res) {
	models.hello_world.findAll({ })
	.then(function(data) {
		res.json(data);
	});
};

exports.list = list;