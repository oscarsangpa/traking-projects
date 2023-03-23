import express from 'express'
import {
    getProjects,
    getProject,
    addProject,
    editProject,
    deleteProject,
    addPartner,
    deletePartner,
} from '../controllers/project.controller.js'
import chekAuth from '../middleware/checkAuth.js'

const router = express.Router()

router.route('/')
    .get(chekAuth, getProjects)
    .post(chekAuth, addProject)

router.route('/:id')
    .get(chekAuth, getProject)
    .put(chekAuth, editProject)
    .delete(chekAuth, deleteProject)

router.post('/add-partner/:id', chekAuth, addPartner)
router.put('/delete-partner/:id', chekAuth, deletePartner)


export {
    router as projectRouter
}

