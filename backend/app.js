const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const Items = require('./models/ItemSchema')
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

        const item=new Items({name,description,location,date,imageurl,contactInfo})
        await item.save()
        res.status(201).json({message:"Product added",data:item})
    } catch (error) {
        console.error(error)
        res.status(500).json({Error:error.message})
    }
})
app.listen(PORT,()=>{
    console.log("Server has started...")   
})

