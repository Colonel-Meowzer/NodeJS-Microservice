var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('executing...');
    next(); // make sure we go to the next routes and don't stop here
});
module.exports = router;
