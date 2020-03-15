const User=require('../models/enteruser');
const mongoose=require('mongoose');
const express=require('express');
const crypto=require('crypto'); //암호화 모듈
const router=express.Router();


router.post('/',(req,res,next)=>{
    User.find({id:req.body.id})//키값에 맞는 db객체 찾기
        .exec()
        .then(EnterUser=>{//찾은 db객체를 가지고 아이디 중복 대조후 회원가입 실시
            if(EnterUser.length>=1){
                res.send('<script type="text/javascript">alert("이미 존재하는 아이디입니다.");window.location="/register";</script>');
            }else{
                let bf=Buffer.alloc(64);//64바이트짜리 버퍼 생성
                let s=crypto.randomFillSync(bf).toString('hex');//랜덤으로 버퍼를 채운다
                let pass=crypto.scryptSync(req.body.password,s,64,{N:1024}).toString('hex');//해싱작업 scrypt메서드 사용
                let user=new User({//db에 값 할당후
                    CompanyRegistrationNumber:req.body.CompanyRegistrationNumber,
                    id:req.body.id,
                    password:pass,
                    salt:s
                });
                user
                    .save()//저장
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