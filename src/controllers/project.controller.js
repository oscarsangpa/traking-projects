import Project from '../models/Project.model.js'


const getProjects = async (req, res) => {
    const projects = await Project
        .find()
        .where('creator')
        .equals(req.user)

    res.json(projects)
}


const getProject = async (req, res) => { }


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


const editProject = async (req, res) => { }
const deleteProject = async (req, res) => { }
const addPartner = async (req, res) => { }
const deletePartner = async (req, res) => { }


const getTask = async (req, res) => { }

export {
    getProjects,
    getProject,
    addProject as newProject,
    editProject,
    deleteProject,
    addPartner,
    deletePartner,
    getTask
}