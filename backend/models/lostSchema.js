const mongoose=require('mongoose')

const lostSchema=new mongoose.Schema({
    name:String,
    description:String,
    location:String,
    date:Date,
    imageurl:String,
    contactInfo:String,
})

const lost=mongoose.model('lost',lostSchema)
module.exports=lost

