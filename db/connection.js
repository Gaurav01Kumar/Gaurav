const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Portfolio",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Server is succefully conneted to database ");
}).catch((e)=>{
    console.log(e);
})