// Código intencionalmente vulnerable para la Actividad 2
function mostrarMensajeDelUsuario(inputDelUsuario) {
    const contenedor = document.getElementById('mensaje');
    
    // PELIGRO: Usar innerHTML directamente con datos que vienen del usuario
    // Esto permite ataques de Cross-Site Scripting (XSS)
    contenedor.innerHTML = "Hola, " + inputDelUsuario;
}