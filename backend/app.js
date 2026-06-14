const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const Item = require('./models/ItemSchema')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json()) 

const PORT = process.env.PORT || 3000
const dbUrl=process.env.MONGODB_URL

async function main(){
    await mongoose.connect(dbUrl)
}
main()
.then(()=>{
    console.log('Connected to MongoDB')
})
.catch((err)=>{
    console.error('Error connecting to MongoDB:', err)
})

app.post('/items',async(req,res)=>{
    try {
        const{name,description,location,date,imageurl,contactInfo}=req.body

        const item=new Item({name,description,location,date,imageurl,contactInfo})
        await item.save()
        res.status(201).json({message:"Product added",data:item})
    } catch (error) {
        console.error(error)
        res.status(500).json({Error:error.message})
    }
})

app.get('/items',async(req,res)=>{
    try {
        const things=await Item.find()
        res.status(200).json({message:"Product details recieved",data:things})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})
app.listen(PORT,()=>{
    console.log("Server has started...")   
})

