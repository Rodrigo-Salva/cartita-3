// Selección de elementos del DOM
const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const particulas = document.getElementById("particulas");

/**
 * Crea un corazón flotante animado
 */
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.className = "corazon-flotante";
  
  // Posición horizontal aleatoria
  corazon.style.left = Math.random() * 100 + "%";
  
  // Duración de animación aleatoria entre 5-8 segundos
  corazon.style.animationDuration = Math.random() * 3 + 5 + "s";
  
  // Delay aleatorio hasta 5 segundos
  corazon.style.animationDelay = Math.random() * 5 + "s";
  
  particulas.appendChild(corazon);

  // Eliminar el corazón después de la animación
  setTimeout(() => {
    corazon.remove();
  }, 8000);
}

// Generar corazones flotantes cada 300ms
setInterval(crearCorazon, 300);

/**
 * Manejo de la interacción de apertura/cierre del sobre
 */
document.addEventListener("click", (e) => {
  // Abrir el sobre
  if (
    e.target.matches(".sobre") ||
    e.target.matches(".solapa-derecha") ||
    e.target.matches(".solapa-izquierda") ||
    e.target.matches(".corazon")
  ) {
    envoltura.classList.toggle("abierto");
    envoltura.classList.add("desactivar-sobre");

    // Animación de apertura de la carta
    if (!carta.classList.contains("abierta")) {
      setTimeout(() => {
        carta.classList.add("mostrar-carta");

        setTimeout(() => {
          carta.classList.remove("mostrar-carta");
          carta.classList.add("abierta");
        }, 600);
      }, 800);
    }
  } 
  // Cerrar el sobre
  else if (e.target.matches(".envoltura-sobre *")) {
    envoltura.classList.remove("abierto");
    envoltura.classList.remove("desactivar-sobre");

    // Animación de cierre de la carta
    if (carta.classList.contains("abierta")) {
      carta.classList.add("cerrando-carta");

      setTimeout(() => {
        carta.classList.remove("cerrando-carta");
        carta.classList.remove("abierta");
      }, 600);
    }
  }
});
