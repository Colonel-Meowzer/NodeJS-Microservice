
var models  = require('../models');

var list = function(req, res) {
	models.pc_clinical_qos2014.findAll({ })
	.then(function(data) {
		res.json(data);
	});
};

exports.list = list;