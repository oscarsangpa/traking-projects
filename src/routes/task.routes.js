import express from 'express'
import {
    getTask,
    addTask,
    editTask,
    deleteTask,
    changeStateTask
} from "../controllers/task.controller.js";
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router()

router.post('/', checkAuth, addTask)

router.route('/:id')
    .get(checkAuth, getTask)
    .put(checkAuth, editTask)
    .delete(checkAuth, deleteTask)

router.post('/state/:id', checkAuth, changeStateTask)

export {
    router as taskRouter
}