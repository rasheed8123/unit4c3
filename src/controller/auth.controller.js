const { body, validationResult } = require('express-validator');
const User = require("../models/user.model")
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({user}, "new")
}
const register = async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        let user = await User.findOne({email : req.body.email})
        if(user){
            return res.status(400).send({message : "Email already exists" })
        }
        user = await User.create(req.body);

        const token = generateToken(user)
        return res.status(200).send({user,token});
    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}


const login = async (req, res) => {
    try{
        
        const user = await User.findOne({email : req.body.email})
        if(!user){
            return res.status(400).send("Wrong Email or Password")
        }
        const token = generateToken(user)
        return res.status(200).send({user,token});


    }
    catch(err){
        res.status(400).send({message : err.message})
    }
}

module.exports = {register,login}

