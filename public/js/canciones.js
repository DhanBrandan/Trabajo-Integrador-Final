console.log("Static");

//Eventos
const configurarIframe = (url) => {
    let iframe = `<iframe width="500" height="500" src="${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    return iframe;
}

//Referencia al elemento html donde se cargaran las canciones
const divCanciones = document.querySelector("#lista-canciones")

// Pedir datos al servidor "blog.routes.js" en este caso pertence a /obtener-canciones
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch ('/obtener-canciones')
    const canciones = await response.json()
    console.log(canciones)

    let registros = "";
    canciones.forEach(cancion => {
        registros += `
        <section class="d-flex gap-2">
        ${configurarIframe(cancion.musik_url)}

        <div class="textos d-flex flex-column justify-content-between">
                <h5> 
                ${cancion.titulo}
                </h5>

                <p> 
                ${cancion.detalle} 
                </p>
                <p> 
                ${cancion.fecha_creacion}
                </p>
            </div>
        </section> 
        `
    });
    divCanciones.innerHTML = registros;
})