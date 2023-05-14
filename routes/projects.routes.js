import express from 'express';
import * as controller from "../controllers/projects.controller.js";
//import * as controller from '../controllers/students.controller.js'

const route = express.Router();

route.get('/projects', controller.getProjects);

route.get('/projects/:section', controller.getProjects);

route.get('/projects/new', controller.createProjectFormPage);
route.post('/projects/new', controller.createProject);

route.get('/projects/:idProject/edit', controller.editProjectForm);
route.post('/projects/:idProject/edit', controller.editProject);

route.get('/projects/:idProject/delete', controller.deleteProjectForm);
route.post('/projects/:idProject/delete', controller.deleteProject);

route.get('/projects/:idProject/view', controller.getProjectById);

export default route