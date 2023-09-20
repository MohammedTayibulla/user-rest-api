const express=require('express');
const User=require('../models/User');

exports.allusers=async (req,res)=>{
try{
    let users=await User.find()
    return res.status(200).json({
        success:true,
        count:users.length,
        users:users
    })
}catch(err){
    return res.status(500).json({
        success:false,
        error:'server error'
    })
    
}
}

exports.singleuser=async (req,res)=>{
    try{
        let id=req.params.id;
        let user=await User.findById(id)
        return res.status(200).json({
            success:true,
            user:user
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'server error'
        })
        
    }
    }

exports.adduser=async (req,res)=>{
    try{
        let {name,age,address}=req.body;
        let user=await User.create(req.body);
        return res.status(201).json({
            success:true,
            user:user
        })        
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'server error'
        })
    }
}

exports.edituser=async (req,res)=>{
    try{
        let id=req.params.id;
        let {name,age,address}=req.body;
        let user=await User.findByIdAndUpdate(id,req.body);
        return res.status(201).json({
            success:true,
            message:`user with id ${req.params.id} is deleted `
        })        
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'server error'
        })
    }
}

exports.deleteuser=async (req,res)=>{
    try{
        let id=req.params.id;
        
        let user=await User.findByIdAndDelete(id);
        return res.status(201).json({
            success:true,
            message:`user with id ${req.params.id} is deleted `
        })        
    }catch(err){
        return res.status(500).json({
            success:false,
            error:'server error'
        })
    }
}
