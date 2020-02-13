var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('findPw',{title:'findPw'});
});

module.exports = router;