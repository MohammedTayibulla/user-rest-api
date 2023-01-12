const mongoose=require("mongoose");

const connectDB=async ()=>{
try{
    let dbUrl=process.env.MONGODB_URL;
    let conn=await mongoose.connect(dbUrl,{useNewUrlParser:true});
    console.log(`mongodb connected successfully!`)
    

}catch(err){
    console.log(`connection to mongodb failed!  `+err)
}
}

module.exports=connectDB;