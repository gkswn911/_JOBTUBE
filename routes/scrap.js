var express = require('express');
var router = express.Router();

/* GET scrap page. */
router.get('/', function(req, res, next) {
  res.render('scrap', { title: 'Express' });
});

module.exports = router;
