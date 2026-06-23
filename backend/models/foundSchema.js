const mongoose=require('mongoose')

const foundSchema=new mongoose.Schema({
    name:String,
    description:String,
    location:String,
    date:Date,
    question:String,
    answer:String,
    imageurl:String,
    contactInfo:String,
})

const Found=mongoose.model('found',foundSchema)
module.exports=Found

