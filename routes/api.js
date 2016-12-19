var express = require('express');
var router = express.Router();
var helloController = require('../controllers/hello_world');
var providerController = require('../controllers/pc_clinical_qos2014');


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('API call...');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET home page. */
router.get('/', function(req, res, next) {x
  res.render('api');
});

/* Return list of entries from test table */
router.get('/test', helloController.list);

router.get('/providers', providerController.list);

module.exports = router;
