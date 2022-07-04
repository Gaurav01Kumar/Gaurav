const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        
    },
    Email:{
        type:String,
        unique:true,
    },
    phoneNumber:{
        type:Number,
        unique:true,
        max:10,
        required:true,
    },
    Message:{
        type:String ,
        required:true,
    }
})
const Message=new mongoose.model("Message",userSchema);
module.exports=Message;