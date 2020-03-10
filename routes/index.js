const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mypage', function(req, res, next) {
  res.render('mypage', { title: 'Express' });
});
module.exports = router;
