const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    username:String,
    passwword:String
})
module.exports=mongoose.model('admin',adminSchema)