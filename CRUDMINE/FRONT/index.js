document.addEventListener("DOMContentLoaded",()=>{
    const bodyTabla      = document.getElementById('bodyTable')

    const formNewPost    = document.getElementById('creaPosteo')

    const fetchProductos = async ()=>{
        try {
            const URL      = 'http://localhost:3030/productos/'
            const response = await fetch(URL)
            if(!response.ok){
                throw new Error ('Error conectando')
            }            
            const data     = await response.json()
            console.log(data);

            bodyTabla.innerHTML = ''

            data.forEach(dato => {
                console.log('hola');
                const fila = document.createElement('tr')

                const celdaTitulo   = document.createElement('td')
                const celdaCreated  = document.createElement('td')
                const celdaAcciones = document.createElement('td')

                celdaTitulo.textContent  = dato.nombre
                celdaCreated.textContent = dato.createdAt

                // ACCIONES 
                const deleteBtn = document.createElement("button")
                // deleteBtn.classList()
                deleteBtn.addEventListener("click",()=>{borraProducto(dato.id)})

            });

        } catch (error) {
            console.error('Error de conexion', error)
        }
    }
    fetchProductos()
})