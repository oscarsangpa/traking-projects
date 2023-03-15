import { router } from '../config/router.config.js'
import {
    getProjects,
    getProject,
    newProject,
    editProject,
    deleteProject,
    addPartner,
    deletePartner,
    getTask
} from '../controllers/project.controller.js'
import chekAuth from '../middleware/checkAuth.js'

router.route('/')
    .get(chekAuth, getProjects)
    .post(chekAuth, newProject)

router.route('/:id')
    .get(chekAuth, getProject)
    .put(chekAuth, editProject)
    .delete(chekAuth, deleteProject)

router.get('task/:id', chekAuth, getTask)

router.post('/add-partner/:id', chekAuth, addPartner)
router.put('/delete-partner/:id', chekAuth, deletePartner)


export {
    router as projectRouter
}

