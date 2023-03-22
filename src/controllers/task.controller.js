import Project from '../models/Project.model.js';
import Task from '../models/Task.model.js'

const getTask = async (req, res) => {
    const { id } = req.params

    const task = await Task.findById(id).populate('project')

    if (!task) {
        const error = new Error('Task not found')
        return res.status(404).json({ msg: error.message })
    }

    if (task.project.creator.toString() !== req.user._id.toString()) {
        const error = new Error('Invalid action')
        res.status(403).json({ msg: error.message })
    }

    res.json(task)
}

const addTask = async (req, res) => {
    const { project } = req.body

    const projectExist = await Project.findById(project)

    if (!projectExist) {
        const error = new Error('Project not found')
        return res.status(404).json({ msg: error.message })
    }

    if (projectExist.creator.toString() !== req.user._id.toString()) {
        const error = new Error('Invalid action')
        res.status(403).json({ msg: error.message })
    }

    try {
        const newTask = await Task.create(req.body)
        res.json(newTask)
    } catch (error) {
        console.error(error)
    }
}
const editTask = async () => { }
const deleteTask = async () => { }
const changeStateTask = async () => { }

export {
    getTask,
    addTask,
    editTask,
    deleteTask,
    changeStateTask
}