// Código intencionalmente vulnerable para la Actividad 2
// Flujo completo: Origen no confiable -> Destino peligroso

function mostrarMensajeDelUsuario() {
    // 1. ORIGEN (Source): Tomamos datos directamente de la URL (parámetro 'nombre')
    const parametrosUrl = new URLSearchParams(window.location.search);
    const inputDelUsuario = parametrosUrl.get('nombre');
    
    const contenedor = document.getElementById('mensaje');
    
    // 2. DESTINO (Sink): Inyectamos el dato sin limpiarlo
    // Esto es un DOM XSS de libro. ¡CodeQL no podrá ignorarlo!
    contenedor.innerHTML = "Hola, " + inputDelUsuario;
}

// Ejecutamos la función
mostrarMensajeDelUsuario();