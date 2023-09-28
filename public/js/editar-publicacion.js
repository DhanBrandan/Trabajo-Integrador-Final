// Se obtiene la publicación a editar
const obtenerPublicacion = async (id) => {
    const response = await fetch(`/publicacion/${id}`)
    const data = await response.json()
    return data;
}

// Referencia al elemento de formulario html
const formEditar = document.querySelector("#form-editar")

// Se obtiene el id de la publicación a editar
const id = formEditar.dataset.id

// Cuando se carga el contenido del html y recursos estáticos, se solicita la publicación y se muestran en el formulario
document.addEventListener('DOMContentLoaded', async () => {
    // Se obtiene la publicación
    const publicacion = await obtenerPublicacion(id);

    // Referencia a los elementos del formulario
    const titulo = document.querySelector('#titulo')
    const descripcion = document.querySelector('#detalle')
    const url_imagen = document.querySelector('#img_url')
    const fecha = document.querySelector('#fecha_creacion')
    const imgPreview = document.querySelector('#img-preview')


    // Los Valores obtenidos se asignan a los campos del formulario
    titulo.value = publicacion.titulo;
    descripcion.value = publicacion.detalle;
    url_imagen.value = publicacion.img_url;
    fecha.value = new Date(publicacion.fecha_creacion).toISOString().split('T')[0];
    imgPreview.src = publicacion.img_url;

})

// Evento para guardar los cambios
formEditar.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dataForm = {
        //Obtengo el valor
    titulo: document.querySelector('#titulo').value,
    detalle: document.querySelector('#detalle').value,
    img_url: document.querySelector('#img_url').value,
    fecha_creacion: document.querySelector('#fecha_creacion').value
}

    // Enviar al servidor
    const response = await fetch(`/publicacion/${id}`, {
        method: 'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataForm)
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"

})