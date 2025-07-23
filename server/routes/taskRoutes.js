import express from 'express'
import { createTask, deleteTask, getAllTasks, updateTask } from '../controller/task.controller.js'

const router=express.Router()


router.get("/tasks", getAllTasks);
router.post('/create',createTask)
router.put('/update/:id',updateTask)
router.delete("/tasks/:id", deleteTask);

export default router