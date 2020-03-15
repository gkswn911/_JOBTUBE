const User=require('../models/indivuser');
const mongoose=require('mongoose');
const express=require('express');
const crypto=require('crypto');
const router=express.Router();

router.post('/',(req,res,next)=>{
    console.log('호출됨');
    console.log(req.body);
    User.find({id:req.body.id})
        .exec()
        .then(IndivUser=>{
            if(IndivUser.length>=1){
                res.send('<script type="text/javascript">alert("이미 존재하는 아이디입니다.");window.location="/register";</script>');
            }else{
                let bf=Buffer.alloc(64);
                let s=crypto.randomFillSync(bf);
                let pass=crypto.scryptSync(req.body.password,s,64,{N:1024}).toString('hex');
                let user=new User({
                    id:req.body.id,
                    password:pass,
                    phone:req.body.phone,
                    email:req.body.email,
                    belong:req.body.belong,
                    salt:s
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