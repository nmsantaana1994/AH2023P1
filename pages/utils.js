function createPage(title, content) {
    let html;

    html = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">';
    html += '<link rel="stylesheet" href="/css/styles.css">';
    html += '<title>' + title + '</title></head><body>';
    html += `    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="/img/project-ico.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                        Web Projects
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><a href="/projects" class="nav-link">Projects</a></li>
                            <li class="nav-item"><a href="/projects/mobile" class="nav-link">Mobile</a></li>
                            <li class="nav-item"><a href="/projects/landing" class="nav-link">Landing Page</a></li>
                            <li class="nav-item"><a href="/projects/webapp" class="nav-link">Web App</a></li>
                            <li class="nav-item"><a href="/projects/ecommerce" class="nav-link">e-Commerce</a></li>
                            <li class="nav-item"><a href="/projects/game" class="nav-link">Games</a></li>
                        </ul>
                    </div>
                    </div>
                </nav><main class="container">`;

    //html += '<a href="/students">Estudiantes</a> | <a href="/students/new">Nuevo Estudiante</a>';

    html += '<h1 class="mb-3 text-center">1er Parcial - Web Projects</h1>';



    html += content;
    html += '</main></body> </html>';

    return html
}

export {
    createPage,
}