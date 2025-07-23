import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import { ConnectDB } from "./config/db.js";

import TaskRouter from './routes/taskRoutes.js'

dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())
ConnectDB()

const PORT=process.env.PORT||5080
app.use(TaskRouter)
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})