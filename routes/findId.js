const express = require('express');
const router = express.Router();

router.get('/',function(req,res,next){
    res.render('findId',{title:'findid'});
});

module.exports = router;