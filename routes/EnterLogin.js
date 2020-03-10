const User=require('../models/indivuser');
const express=require('express');
const router=express.Router();

router.post('/',(req,res,next)=>{
    console.log('실행');
    let id=req.body.id;
    let password=req.body.password;

    console.log(id,password);

    User.findOne({id:id,password:password})
        .exec()
        .then(result=>{
            if(result){
                res.send('<script type="text/javascript">alert("로그인이 완료되었습니다.");window.location="/";</script>');
            }else{
                res.send('<script type="text/javascript">alert("비밀번호가 틀리거나 없는 회원입니다.");window.location="/";</script>');
            }
        })
        .catch(err=>{
        console.log(err);
    });
});
module.exports=router;