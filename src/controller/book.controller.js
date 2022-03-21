const { body, validationResult } = require('express-validator');
const express = require("express");
const book = require('../models/book.model');
const app = express.Router()

app.post("/",
body("likes").isNumeric().withMessage("plz enter a valid age")
,async(req,res)=>{
    try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
      const data = await book.create(req.body)
      return res.status(201).send(data)
    }catch(err){
        console.log(err.message)
        return res.status(400).send(err.message)
    }
})
app.get("/",async(req,res)=>{
   try{
   const page = req.query.page || 1 ;
   const pagesize = 10 ;
   const skip = (page-1) * pagesize ;
   const data = await book.find().skip(skip).limit(pagesize).lean().exec();
   return res.status(200).send(data)   
}catch(err){
       console.log(err.message)
       return res.status(400).send(err.message)
   }
})
module.exports = app;