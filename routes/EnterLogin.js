const User=require('../models/enteruser');
const express=require('express');
const crypto=require('crypto');
const router=express.Router();

router.post('/',(req,res,next)=>{
    console.log('실행');
    let id=req.body.id;

    User.findOne({id:id})//키값에 맞는 db객체 찾아서
        .exec()
        .then(result=>{//바디에 있는 비번 해싱해서 db비번과 비교
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