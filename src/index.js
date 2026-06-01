// Codigo corregido


function mostrarMensajeDelUsuario() {
    const parametrosUrl = new URLSearchParams(window.location.search);
    const inputDelUsuario = parametrosUrl.get('nombre');
    
    const contenedor = document.getElementById('mensaje');
    
    // SOLUCION: Usar textContent en lugar de innerHTML.
    contenedor.textContent = "Hola, " + inputDelUsuario;
}

mostrarMensajeDelUsuario();