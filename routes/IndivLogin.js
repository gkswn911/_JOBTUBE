const User=require('../models/indivuser');
const express=require('express');
const crypto=require('crypto');
const router=express.Router();

router.post('/',(req,res,next)=>{
    console.log('실행');
    let id=req.body.id;
    let password=req.body.password;

    User.findOne({id:id})
        .exec()
        .then(result=>{
            let pass=crypto.scryptSync(req.body.password,result.salt,64,{N:1024}).toString('hex');
            if((!result)||(result.password!==pass)){
                 res.send('<script type="text/javascript">alert("아이디 또는 비밀번호가 잘못되었습니다.");window.location="/";</script>');
            }
            else{
                res.send('<script type="text/javascript">alert("로그인이 완료되었습니다.");window.location="/";</script>');
            }
        })
        .catch(err=>{
        console.log(err);
    });
});
module.exports=router;