import { Router } from "express";
import * as controller from '../controllers/projects.api.controller.js';

const route = Router()

route.get("/projects", controller.getProjects)
route.post('/projects', controller.createProject)

route.get("/projects/:idProject", controller.getProjectById)

route.put("/projects/:idProject", controller.replaceProject)
route.patch("/projects/:idProject", controller.updateProject)

route.delete("/projects/:idProject", controller.deleteProject)

export default route