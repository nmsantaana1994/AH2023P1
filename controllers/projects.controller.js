import * as service from "../services/projects.services.js";
import * as view from "../views/projects.view.js";

function getProjects(req, res) {
    const section = req.params.section
    const filter = { section }

    service.getProjects(filter)
        .then(function(projects) {
            res.send(view.createProjectsListPage(projects))
        })
}

function getProjectById(req, res) {
    let idProject = req.params.idProject

    service.getProjectById(idProject)
        .then(function(project) {
            if (project) {
                res.send(view.createProjectPage(project))
            } else {
                res.send(view.createPage('Error', '<p>Proyecto no encontrado</p>'))
            }
        }) 
}

function createProjectFormPage(req, res) {
    res.send(view.createProjectFormPage())
}

function createProject(req, res) {
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }

    service.createProject(project)
        .then(function(newProject) {
            res.send(view.createPage('Proyecto Creado', `<p>Proyecto ${newProject.name} creado con el id #${newProject._id}</p>`))
        })
        .catch(function(error) {
            res.send(view.createPage('Error', '<p>Ocurrio un error</p>'))
        })
}

function editProjectForm(req, res) {
    let idProject = req.params.idProject

    service.getProjectById(idProject)
        .then(function(project) {
            if (project) {
                res.send(view.createEditProjectFormPage(project))
            } else {
                res.send(view.createPage('Error', '<p>Proyecto no encontrado</p>'))
            }
        })
}

function editProject(req, res) {
    let idProject = req.params.idProject

    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }

    service.editProject(idProject, project)
        .then(function(project) {
            if (project) {
                res.send(view.createPage("Proyecto Editado", `<h2>Proyecto #${idProject} editado con éxito!</h2>`))
            } else {
                res.send(view.createPage('Error', '<p>Proyecto no encontrado</p>'))
            }
        })
}

function deleteProjectForm(req, res) {
    let idProject = req.params.idProject

    service.getProjectById(idProject)
        .then(function(project) {
            if (project) {
                res.send(view.createDeleteProjectFormPage(project))
            } else {
                res.send(view.createPage('Error', '<p>Proyecto no encontrado</p>'))
            }
        })
}

function deleteProject(req, res) {
    let idProject = req.params.idProject

    service.deleteProject(idProject)
        .then(function(project) {
            if (project) {
                res.send(view.createPage('Proyecto eliminado', `<p>Proyecto #${project._id} eliminado con éxito!</p>`))
            } else {
                res.send(view.createPage('Error', '<p>Proyecto no encontrado</p>'))
            }
        })
}

function replaceProject(req, res) {
    let idProject = req.params.idProject

    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }

    service.editProject(idProject, project)
        .then(function(project){
            if (project) {
                res.send(view.createEditProjectFormPage(project))
            } else {
                res.send(view.createPage('Error', '<p>Proyecto no encontrado</p>'))
            }
        })
}

export {
    getProjects,
    getProjectById,
    createProjectFormPage,
    createProject,
    editProjectForm,
    editProject,
    deleteProjectForm,
    deleteProject,
    replaceProject,
    
}