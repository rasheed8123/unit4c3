const mongoose = require("mongoose")
const CommentSchema = new mongoose.Schema({
    body : {type:String,required:true},
    bookid : {type:mongoose.Schema.Types.ObjectId,ref:"book",required:true},
    userId : {type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
},
{
    timestamps:true
})
const comment = mongoose.model("comment",CommentSchema)
module.exports = comment