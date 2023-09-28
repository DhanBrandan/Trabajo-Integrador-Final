const mostrarPublicaciones = (publicaciones, elementoHtml) => {
    let secciones = "";
    publicaciones.forEach( (pub) => {
        secciones += `
            <section class="d-flex flex-column" gap-2> 
                <img src="${pub.img_url}" class="rounded" height ="500" width="500 alt="${pub.titulo}">
                <div class="d-flex flex-column justify-content-between">
                    <h4>${pub.titulo}</h4>
                    <p>${pub.detalle}</p>
                    <p>${pub.fecha_creacion}</p>   
                </div>
            </section>
        `
    })

    elementoHtml.innerHTML = secciones;
}

obtenerPublicaciones = async () => {
    const response = await fetch('/publicaciones')
    const data = await response.json()
    return data; 
}

//Hago la solicitud de los datos-
document.addEventListener('DOMContentLoaded', async () => {

    const publicaciones = await obtenerPublicaciones()
    const main = document.querySelector('#lista-publicaciones')
    mostrarPublicaciones(publicaciones, main)

})