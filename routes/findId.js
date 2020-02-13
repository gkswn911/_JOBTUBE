var express = require('express');
var router = express.Router();

router.get('/findId',function(req,res,next){
    res.render('findId',{title:'findid'});
});

module.exports = router;