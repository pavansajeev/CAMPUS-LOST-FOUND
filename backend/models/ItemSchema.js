const mongoose=require('mongoose')

const ItemSchema=new mongoose.Schema({
    name:String,
    description:String,
    location:String,
    date:Date,
    imageUrl:String,
    contactInfo:String,
})

const Item=mongoose.model('Item',ItemSchema)
module.exports=Item