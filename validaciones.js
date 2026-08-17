const formCotizacion = document.getElementById('formCotizacion');

formCotizacion.addEventListener('submit', function (event) {
    event.preventDefault()
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const interes = document.getElementById('interes').value;

    const errorNombre = document.getElementById('errorNombre');
    const errorEmail = document.getElementById('errorEmail');
    const errorInteres = document.getElementById('errorInteres');
    const mensajeExitoso = document.getElementById('mensajeExitoso')

    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorInteres.textContent = "";
    mensajeExitoso.textContent = "";

    let esValido = true;

    if (nombre === "") {
        errorNombre.textContent = "Por favor, ingresa tu nombre completo.";
        esValido = false;
    }

    if (email === "") {
        errorEmail.textContent = "Por favor, ingresa tu correo electrónico.";
        esValido = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        errorEmail.textContent = "Ingresa un correo electrónico valido.";
        esValido = false;
    }

    if (interes === "") {
        errorInteres.textContent = "Selecciona una opción de que es lo que te interesa.";
        esValido = false;
    }

    if (esValido) {
        this.reset();
        // alert("¡Solicitud enviada con éxito! Te contactaremos pronto.");
        mensajeExitoso.textContent = "¡Solicitud enviada con éxito! Te contactaremos pronto.";
    }
});

formCotizacion.addEventListener('reset', function () {
    document.getElementById('errorNombre').textContent = "";
    document.getElementById('errorEmail').textContent = "";
    document.getElementById('errorInteres').textContent = "";
    document.getElementById('mensajeExitoso').textContent = "";
})