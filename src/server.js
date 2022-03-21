const express = require("express")
const mongoose = require("mongoose")
const app = express()
const { body, validationResult } = require('express-validator');
const connect = require("./configs/db")
const bookcontroller = require("./controller/book.controller")
const commentcontroller = require("./controller/comment.controller")
const {register,login} = require("./controller/auth.controller")
app.use(express.json())
// asumming the post question route as books insted of posts
app.use("/books",bookcontroller)
app.use("/comment/",commentcontroller)
// register route 
app.post("/register",
body("firstName").isString().isLength({min:3,max:30}).withMessage("enter a valid firstname")
,body("age").isNumeric().withMessage("enter a valid age"),
body("email").isEmail().withMessage("enter the valid email address")

,register)
// login route
app.post("/login",login)




app.listen(5000,async(req,res)=>{
    try{
      await connect();
    }catch(err){
        console.log(err.message)
    }
    console.log("running")
})