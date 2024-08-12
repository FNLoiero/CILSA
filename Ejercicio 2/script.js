document.getElementById('boton_claro').addEventListener('click', function() {
    document.body.classList.add('estilo_claro');
    document.body.classList.remove('estilo_oscuro');
});

document.getElementById('boton_oscuro').addEventListener('click', function() {
    document.body.classList.add('estilo_oscuro');
    document.body.classList.remove('estilo_claro');
});