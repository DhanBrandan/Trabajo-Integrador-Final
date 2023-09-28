                //Hace referencia a todo el DOM
const formNuevo = document.querySelector('#nueva-publicacion');
//e = Event
formNuevo.addEventListener('submit', async (e) => {
    //Previene el comportamiento por def. del form
    e.preventDefault();

    const data = {
            //Obtengo el valor
        titulo: document.querySelector('#titulo').value,
        detalle: document.querySelector('#detalle').value,
        img_url: document.querySelector('#img_url').value,
        fecha_creacion: document.querySelector('#fecha').value
    }
                                        
    // Envio la informacion al Servidor
    const repuesta = await fetch('/publicacion', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
     })

     const datos = await repuesta.json()
     console.log(datos);

     alert(datos.msg);

     location.href = "/"

});
