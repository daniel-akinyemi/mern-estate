import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err)
})

const app = express()

app.listen(3001,()=>{console.log(`listening on port localhost:${3000}`)})