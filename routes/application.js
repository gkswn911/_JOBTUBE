var express = require('express');
var router = express.Router();

/* GET scrap page. */
router.get('/', function(req, res, next) {
    res.render('application_status', { title: 'app' });
  });

module.exports = router;
