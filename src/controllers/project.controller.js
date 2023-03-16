import Project from '../models/Project.model.js'


const getProjects = async (req, res) => {
    const projects = await Project
        .find()
        .where('creator')
        .equals(req.user)

    res.json(projects)
}

const getProject = async (req, res) => {
    const { id } = req.params

    const project = await Project.findById(id)

    if (!project) {
        const error = new Error('Project not found')
        return res.status(404).json({ msg: error.message })
    }

    if (project.creator.toString() !== req.user._id.toString()) {
        const error = new Error('Invalid action')
        return res.status(401).json({ msg: error.message })
    }

    res.json(project)
}

const addProject = async (req, res) => {
    const project = new Project(req.body)
    project.creator = req.user._id

    try {
        const newProject = await project.save()
        res.json(newProject)
    } catch (error) {
        console.error(error)
    }
}


const editProject = async (req, res) => {
    const { id } = req.params

    const project = await Project.findById(id)

    if (!project) {
        const error = new Error('Project not found')
        return res.status(404).json({ msg: error.message })
    }

    if (project.creator.toString() !== req.user._id.toString()) {
        const error = new Error('Invalid action')
        return res.status(401).json({ msg: error.message })
    }

    project.name = req.body.name || project.name
    project.description = req.body.description || project.description
    project.deadLine = req.body.deadLine || project.deadLine
    project.client = req.body.client || project.client

    try {
        const projectEdit = await project.save()
        res.json(projectEdit)
    } catch (error) {
        console.error(error)
    }
}

const deleteProject = async (req, res) => {
    const { id } = req.params

    const project = await Project.findById(id)

    if (!project) {
        const error = new Error('Project not found')
        return res.status(404).json({ msg: error.message })
    }

    if (project.creator.toString() !== req.user._id.toString()) {
        const error = new Error('Invalid action')
        return res.status(401).json({ msg: error.message })
    }

    try {
        await project.deleteOne()
        res.json({ msg: 'Delete Project Correctly' })
    } catch (error) {
        console.error(error)
    }
}
const addPartner = async (req, res) => { }
const deletePartner = async (req, res) => { }


const getTask = async (req, res) => { }

export {
    getProjects,
    getProject,
    addProject,
    editProject,
    deleteProject,
    addPartner,
    deletePartner,
    getTask
}