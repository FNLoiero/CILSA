   // Script para alternar entre modo claro y oscuro
   const botonClaro = document.getElementById('boton_claro');
   const botonOscuro = document.getElementById('boton_oscuro');
   
   // Evento para activar el estilo claro
   botonClaro.addEventListener('click', () => {
     document.body.classList.remove('dark-mode');
   });
   
   // Evento para activar el estilo oscuro
   botonOscuro.addEventListener('click', () => {
     document.body.classList.add('dark-mode');
   });