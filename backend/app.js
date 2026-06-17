const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')


const Lost = require('./models/lostSchema')
const User = require('./models/userSchema')
const Found = require('./models/foundSchema')

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


//lost item table

app.post('/lost',async(req,res)=>{
    try {
        const{name,description,location,date,imageurl,contactInfo}=req.body

        const lost=new Lost({name,description,location,date,imageurl,contactInfo})
        await lost.save()
        res.status(201).json({message:"Product added",data:lost})
    } catch (error) {
        console.error(error)
        res.status(500).json({Error:error.message})
    }
})

app.get('/lost',async(req,res)=>{
    try {
        const things=await Lost.find()
        res.status(200).json({message:"Product details recieved",data:things})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

app.patch('/lost/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const{name,description,location,date,imageurl,contactInfo}=req.body
        const lost=await Lost.findByIdAndUpdate(id,{name,description,location,date,imageurl,contactInfo},{new:true})
        if(!lost){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product updated",data:lost})
    }
        catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

app.delete('/lost/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const lost=await Lost.findByIdAndDelete(id)
        if(!lost){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product deleted",data:lost})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})
//Found Item table

app.post('/found',async(req,res)=>{
    try{
        const{name,description,location,date,imageurl,contactInfo}=req.body
        const found=new Found({name,description,location,date,imageurl,contactInfo})
        await found.save()
        res.status(201).json({message:"Product added",data:found})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }

})

app.get('/found',async(req,res)=>{
    try {
        const things=await Found.find() 
        res.status(200).json({message:"Product details recieved",data:things})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})

app.patch('/found/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const{name,description,location,date,imageurl,contactInfo}=req.body
        const found=await Found.findByIdAndUpdate(id,{name,description,location,date,imageurl,contactInfo},{new:true})
        if(!found){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product updated",data:found})
    }
    catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

app.delete('/found/:id',async(req,res)=>{
    try {
        const{id}=req.params
        const found=await Found.findByIdAndDelete(id)
        if(!found){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"Product deleted",data:found})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

//User table

app.post('/users',async(req,res)=>{ 
    try {
        const{username,email,password}=req.body
        const user=new User({username,email,password})
        await user.save()
        res.status(201).json({message:"User added",data:user})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:error.message})
    }
})

app.get('/users',async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).json({message:"User details recieved",data:users})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
})




app.listen(PORT,()=>{
    console.log("Server has started...")   
})

