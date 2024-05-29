// Selecciona el elemento del icono de hamburguesa correctamente
let hamburger = document.querySelector(".hamburger");
let enlacesHeader = document.querySelector(".enlaces-header");

// Agrega un listener de evento para el icono de hamburguesa
hamburger.addEventListener("click", function() {
    // Alterna la clase para abrir/cerrar el menú móvil
    enlacesHeader.classList.toggle("open");
    // Cambia el color del icono de hamburguesa al abrir/cerrar el menú
    if (enlacesHeader.classList.contains("open")) {
        hamburger.style.color = "#fff";
    } else {
        hamburger.style.color = "#000";
    }
});

// Agrega un listener de evento para cerrar el menú móvil al hacer clic en un enlace
enlacesHeader.addEventListener("click", function() {
    enlacesHeader.classList.remove("open");
    hamburger.style.color = "#000";
});