var mongoose=require('mongoose');

var IndivUserSchema=new mongoose.Schema({
    id:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:String,required:true},
    email:{type:String, required:true},
    belong:{type:String, required:true}
});

module.exports=mongoose.model('IndivUser',IndivUserSchema);