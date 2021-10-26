const express = require('express');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userid:{
        type:Number,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    
    password:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    
    
})
//we are creating new collection
const UserRanking = new mongoose.model("UserRanking", userSchema)

module.exports = UserRanking;