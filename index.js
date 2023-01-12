const express=require('express');

const app=express();

app.use('/',(req,res)=>{
    res.json({message:"Hello from express app"});
})
const port=4000;
app.listen(port,()=>{
    console.log(`server started at localhost:${port}`)
});