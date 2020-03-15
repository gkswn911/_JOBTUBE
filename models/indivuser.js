const mongoose=require('mongoose');

let IndivUserSchema=new mongoose.Schema({
    id:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String, required:true},
    belong:{type:String, required:true},
    salt:{type:String}
});

module.exports=mongoose.model('IndivUser',IndivUserSchema);