import * as service from "../../services/clients.services.js";

function getClients(req, res) {
    const filter = req.query;

    service.getClients(filter)
        .then(function(clients) {
            res.status(200).json(clients)
        })

}

function createClient(req, res) {
    const clientAPI = {
        name: req.body.name,
        foto: req.body.foto,
        description: req.body.description,
        projects: req.body.projects
    }

    service.createClient(clientAPI)
        .then(function(clientAPI) {
            res.status(201).json(clientAPI)
        })
}

function getProjects(req, res) {
    const idClient = req.params.idClient;
    service.getProjects(idClient)
        .then(function(projects) {
            res.status(200).json(projects)
        })
}

export {
    getClients,
    createClient,
    getProjects
}