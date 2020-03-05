var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('kind_of_job', { title: 'kind' });
});

module.exports = router;
