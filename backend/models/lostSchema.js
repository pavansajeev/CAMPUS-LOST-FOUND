const mongoose=require('mongoose')

const lostSchema=new mongoose.Schema({
    name:String,
    description:String,
    location:String,
    date:Date,
    image:String,
    contactInfo:String,
    userid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
           },
})

const lost=mongoose.model('lost',lostSchema)
module.exports=lost

