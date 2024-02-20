import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import UserRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();


mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err)
})

const app = express()

app.listen(3001,()=>{console.log(`listening on port localhost:${3001}`)})
app.use(express.json())
app.use("/api/user",UserRouter)
app.use("/api/auth",authRouter)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})