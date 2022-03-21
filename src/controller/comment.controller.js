const { body, validationResult } = require('express-validator');
const express = require("express");
const comment = require('../models/comment.model');
const app = express.Router()

app.post("/",
body("body").not().isEmpty().withMessage("enter the comment"),
async(req,res)=>{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await comment.create(req.body)
    return res.status(201).send(data)
    }catch(err){
        console.log(err.message)
        return res.status(400).send(err.message)
    }
})