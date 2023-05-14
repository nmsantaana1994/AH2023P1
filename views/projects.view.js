import { createPage } from "../pages/utils.js";

function createProjectsListPage(projects) {
    let html = `<h2 class="mb-3">Lista de Proyectos</h2><a href="/projects/new" class="btn btn-primary w-100">Nuevo Proyecto</a><hr>`;
    html += `<div class="mb-3"><table class="table table-striped table-bordered"><thead><tr><th>Nombre</th><th>Descripción</th><th>Link</th><th>Imagen</th><th>Tecnologias</th><th>Sección</th><th>Acciones</th></tr></thead><tbody>`;

    for (let i = 0; i < projects.length; i++) {
        html += `<tr><td>${projects[i].name}</td><td>${projects[i].description}</td><td>${projects[i].link}</td><td><img class="mw-100" src="${projects[i].img}"></td><td>${projects[i].technologies}</td><td>${projects[i].section}</td><td class="text-center"><div class="d-flex gap-1"><a href="/projects/${projects[i]._id}/view" class="btn btn-primary ">Ver</a> <a href="/projects/${projects[i]._id}/edit" class="btn btn-warning ">Editar</a> <a href="/projects/${projects[i]._id}/delete" class="btn btn-danger ">Eliminar</a></div></td></tr>`
    }

    html += '</tbody></table></div>'

    return createPage('Projects', html)
}

function createProjectPage(project) {
    let html = `<h2 class="text-center mb-3">${project.name}</h2>
                <div class="d-flex justify-content-center mb-3">            
                    <img class="mw-100" src="${project.img}">
                </div>
                <div class="text-center mb-3">            
                    <p>${project.description}</p>
                    <p>Link: ${project.link}</p>
                    <p>Tecnologías: ${project.technologies}</p>
                    <p>Seccion: ${project.section}</p>
                </div>
                `;
    
    return createPage("Project", html);
}

function createProjectFormPage() {
    let html = `<h2 class="mb-3">Crear un proyecto</h2>
    <form action="/projects/new" method="POST">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" name="name" id="name" class="form-control mb-3" placeholder="Nombre" }">

        <label for="description" class="form-label">Descripción</label>
        <input type="text" name="description" id="description" class="form-control mb-3" placeholder="Descripción"> 

        <label for="link" class="form-label">Link</label>
        <input type="text" name="link" id="link" class="form-control mb-3" placeholder="Link"> 

        <label for="img" class="form-label">Imagen</label>
        <input type="text" name="img" id="img" class="form-control mb-3" placeholder="Imagen"> 

        <label for="technologies" class="form-label">Tecnologías</label>
        <input type="text" name="technologies" id="technologies" placeholder="Tecnologías" class="form-control mb-3">

        <label for="section" class="form-label">Sección</label>
        <input type="text" name="section" id="section" placeholder="Sección" class="form-control mb-3">

        <button type="submit" class="btn btn-primary w-100">Crear</button>
    </form>   
    `
return createPage("Modificar Proyecto", html)
}

function createEditProjectFormPage(project) {
    let html = `<h2 class="mb-3">Editar un proyecto</h2>
                <form action="/projects/${project._id}/edit" method="POST">
                    <label for="name" class="form-label">Nombre</label>
                    <input type="text" name="name" id="name" class="form-control mb-3" placeholder="Nombre" value="${project.name}">

                    <label for="description" class="form-label">Descripción</label>
                    <input type="text" name="description" id="description" class="form-control mb-3" placeholder="Descripción" value="${project.description}"> 

                    <label for="link" class="form-label">Link</label>
                    <input type="text" name="link" id="link" class="form-control mb-3" placeholder="Link" value="${project.link}"> 

                    <label for="img" class="form-label">Imagen</label>
                    <input type="text" name="img" id="img" class="form-control mb-3" placeholder="Imagen" value="${project.img}"> 

                    <label for="technologies" class="form-label">Tecnologías</label>
                    <input type="text" name="technologies" id="technologies" placeholder="Tecnologías" class="form-control mb-3" value="${project.technologies}">

                    <label for="section" class="form-label">Sección</label>
                    <input type="text" name="section" id="section" placeholder="Sección" class="form-control mb-3" value="${project.section}">

                    <button type="submit" class="btn btn-primary w-100">Editar</button>
                </form>   
                `
    return createPage("Modificar Proyecto", html)
}

function createDeleteProjectFormPage(project) {
    let html = `<h2 class="mb-3">${project.name}</h2>
                <div class="d-flex justify-content-center mb-3">            
                    <img class="mw-100" src="${project.img}">
                </div>
                <div class="text-center mb-3">            
                    <p>${project.description}</p>
                    <p>Link: ${project.link}</p>
                    <p>Tecnologías: ${project.technologies}</p>
                    <p>Seccion: ${project.section}</p>
                </div>

                <form action="/projects/${project._id}/delete" method="POST">
                    <p>¿Esta seguro que quiere eliminarlo?</p>
                    <button type="submit" class="btn btn-danger w-100">Eliminar</button>
                </form>
                `
    
    return createPage('Eliminar Proyecto', html)
}

export {
    createProjectsListPage,
    createProjectPage,
    createPage,
    createProjectFormPage,
    createEditProjectFormPage,
    createDeleteProjectFormPage
}