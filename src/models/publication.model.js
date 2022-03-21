const mongoose = require("mongoose")
const publicationSchema = new mongoose.Schema({
    name : {type:String,required:true},
},
{
    timestamps:true
})
const publication = mongoose.model("publish",publicationSchema)
module.exports = publication;