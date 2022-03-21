const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    firstName : {type:String,required:true},
    lastName : {type:String,required:false},
    age : {type:Number,required:true},
    email :{type:String,required:true,unique:true},
    profileImages:[{type:String,required:true}],
},
{
    timestamps:true
})
const user = mongoose.model("user",UserSchema)
module.exports = user;