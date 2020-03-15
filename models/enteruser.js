const mongoose=require('mongoose');

let EnterUserSchema=new mongoose.Schema({
    CompanyRegistrationNumber:{type:String,required:true,unique:true},
    id:{type:String,required:true},
    password:{type:String,required:true},
    salt:{type:String}
});

module.exports=mongoose.model('EnterUser',EnterUserSchema);