const express = require('express');
const router = express.Router();

/* GET job_opening page. */
router.get('/', function(req, res, next) {
  res.render('job_opening', { title: '공고' });
});

module.exports = router;
