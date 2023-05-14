import { MongoClient, ObjectId } from "mongodb";
import { getProjectById } from "./projects.services.js"

const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");
const colClients = db.collection("Clients")

async function getClients(filter = {}) {
    await client.connect();
    
    const filterMongo = { deleted: {$ne: true} }
    
    return colClients.find(filterMongo).toArray();
}

async function createClient(clientAPI) {
    await client.connect()
    await colClients.insertOne(clientAPI)
    return clientAPI
}

async function getProjects(idClient) {
    await client.connect()
    const clientAPI = await db.collection("Clients").findOne({ _id: new ObjectId(idClient)})

    let projectsId = []
    let projects = []

    clientAPI.projects.forEach(projectId => {
        projectsId.push(projectId)
    });

    for (const id of projectsId) {
        const project = await getProjectById(id);
        projects.push(project)
    }
    
    return projects
}

export {
    getClients,
    createClient,
    getProjects
}