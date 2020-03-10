const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
    res.render('findPw',{title:'findPw'});
});

module.exports = router;