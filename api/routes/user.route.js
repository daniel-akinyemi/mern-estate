import express from 'express'
import { test } from '../controllers/user.controller.js'

const UserRouter = express.Router()

UserRouter.post("/", test)

export default UserRouter