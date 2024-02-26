import express from 'express'
import { google, signin, signup } from '../controllers/auth.controller.js'

const authRouter = express.Router()

authRouter.post("/signup", signup)
authRouter.post("/sign-in",  signin)
authRouter.post("/google", google)

export default authRouter