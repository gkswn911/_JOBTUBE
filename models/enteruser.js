const mongoose=require('mongoose');

const EnterUserSchema=new mongoose.Schema({
    CompanyRegistrationNumber:{type:String,required:true,unique:true},
    id:{type:String,required:true},
    password:{type:String,required:true}
});

module.exports=mongoose.model('EnterUser',EnterUserSchema);