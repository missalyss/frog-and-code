var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('records', { whatever: 'hallloooo'});
});

module.exports = router;
