const express=require('express');
const Product=require('../models/Product');

exports.allProducts=async (req,res)=>{
try{
    let products=await Product.find()
    return res.status(200).json({
        success:true,
        count:products.length,
        products:products
    })
}catch(err){
    return res.status(500).json({
        success:false,
        error:'server error'
    })
    
}
}

exports.singleProduct=async (req,res)=>{
    try{
        let id=req.params.id;
        let product=await Product.findById(id)
        return res.status(200).json({
            success:true,
            product:product
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'server error'
        })
        
    }
    }

exports.addProduct=async (req,res)=>{
    try{
        let {title,description,image,brand,price,stocks,rating,category}=req.body;
        let product=await Product.create(req.body);
        return res.status(201).json({
            success:true,
            product:product
        })        
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'server error'
        })
    }
}

exports.editProduct=async (req,res)=>{
    try{
        let id=req.params.id;
        let {title,description,image,brand,price,stocks,rating,category}=req.body;
        let product=await Product.findByIdAndUpdate(id,req.body);
        return res.status(201).json({
            success:true,
            message:`product with id ${req.params.id} is deleted `
        })        
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'server error'
        })
    }
}

exports.deleteProduct=async (req,res)=>{
    try{
        let id=req.params.id;
        
        let product=await Product.findByIdAndDelete(id);
        return res.status(201).json({
            success:true,
            message:`product with id ${req.params.id} is deleted `
        })        
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'server error'
        })
    }
}
