// Selección de objetos HTML
const burger = document.querySelector(".burger");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const nav = document.querySelector(".nav"); // Suponiendo que 'nav' sea el contenedor del menú

let isAnimating = false; // Bandera para controlar la animación

// Función para alternar la clase en las líneas
function toggleBurger() {
  if (isAnimating) return; // Si la animación está en curso, no permitir más clics

  isAnimating = true; // Marcar la animación como en curso
  line1.classList.toggle("diagonal-line-1");
  line2.classList.toggle("horizontal-line");
  line3.classList.toggle("diagonal-line-2");
  setTimeout(() => {
    isAnimating = false; // Animación finalizada, permitir nuevamente los clics
  }, 300); // 300ms debe coincidir con la duración de la transición en el CSS
}

// Llamada a la función cuando ocurre el evento de clic
burger.addEventListener("click", toggleBurger);