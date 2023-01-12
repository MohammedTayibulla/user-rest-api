const express=require('express');
const dotenv=require("dotenv");
dotenv.config({path:'./config/config.env'});
const mongoose=require('mongoose');
const cors=require('cors');
const path = require('path');
const logger = require('morgan');


const productRouter = require('./routes/products');
const connectDb=require('./config/db');

const app=express();
//connecting db
connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

app.use('/index',(req,res)=>{
    res.json({'msg':'hello world'})

});

app.use('/', productRouter);

const port=4000;
app.listen(port,()=>{
    console.log(`server started at localhost:${port}`)
});
