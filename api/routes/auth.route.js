import express from 'express'
import { signin, signup } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post("/signup", signup)
authRouter.post("/sign-in",  signin)

export default authRouter