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


