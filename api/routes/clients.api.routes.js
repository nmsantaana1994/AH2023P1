import { Router } from "express";
import * as controller from "../controllers/clients.api.controller.js"

const route = Router()

route.get("/clients", controller.getClients)
route.post("/clients", controller.createClient)

route.get("/clients/:idClient/projects", controller.getProjects)

export default route