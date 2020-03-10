var User=require('../models/enteruser');
var mongoose=require('mongoose');
var express=require('express');
var router=express.Router();

router.post('/',(req,res,next)=>{
    console.log('호출됨');
    console.log(req.body);
    User.find({id:req.body.id})
        .exec()
        .then(EnterUser=>{
            if(EnterUser.length>=1){
                res.send('<script type="text/javascript">alert("이미 존재하는 아이디입니다.");window.location="/register";</script>');
            }else{
                var user=new User({
                    CompanyRegistrationNumber:req.body.CompanyRegistrationNumber,
                    id:req.body.id,
                    password:req.body.password,
                });
                user
                    .save()
                    .then(result=>{
                        console.log(result);
                        res.send('<script type="text/javascript">alert("회원가입이 완료되었습니다.");window.location="/";</script>');
                    })
                    .catch(err=>{
                        console.log(err);
                    });
            }
        });
});

module.exports=router;