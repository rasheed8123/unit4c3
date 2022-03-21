const mongoose = require("mongoose")
const BookSchema = new mongoose.Schema({
    likes : {type:Number,default:0,
    enum: { values: [0,1], message: 'enter 1 for like and 0 for dislike' }},
    coverImage : [{type:String,required:true}],
    content : {type:Number,required:true},
    publicationid:{type:mongoose.Schema.Types.ObjectId,ref:"publication",required:true},
    userId : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},
{
    timestamps:true
})
const book = mongoose.model("book",BookSchema)
module.exports = book;