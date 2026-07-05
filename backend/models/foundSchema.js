const mongoose=require('mongoose')

const foundSchema=new mongoose.Schema({
    name:String,
    description:String,
    location:String,
    date:Date,
    verifyquestion:String,
    contactInfo:String,

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },

    claimed:{
        type:Boolean,
        default:false
    }
})


const Found=mongoose.model('found',foundSchema)
module.exports=Found

