// Efecto sobre texto sección sobre mí

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById('text');
    const text = "Hola, soy Gastón Iglesias Rojas.";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);  // Ajusta el tiempo si quieres que sea más rápido o más lento
        } else {
            setTimeout(resetText, 1500);  // Espera un tiempo antes de reiniciar
        }
    }

    function resetText() {
        textElement.textContent = "";  // Borra el texto actual
        index = 0;
        setTimeout(typeText, 500);  // Comienza a escribir de nuevo
    }

    typeText();  // Inicia la animación de escritura
});

// Efectos botón scroll

// Mostrar el botón al hacer scroll
const scrollUp = document.querySelector('.scroll-up');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollUp.classList.add('show');
    } else {
        scrollUp.classList.remove('show');
    }
});

// Desplazar hacia arriba al hacer clic
scrollUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal

// Función para mostrar el modal
function mostrarModal(event) {
    event.preventDefault(); // Evita el envío normal del formulario
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Cerrar el modal al hacer clic en el botón de cerrar
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
        limpiarFormulario(); // Llama a la función para limpiar el formulario
    }
}

// Función para limpiar el formulario
function limpiarFormulario() {
    // Selecciona el formulario usando su clase o id
    var formulario = document.querySelector(".php-email-form");
    formulario.reset(); // Limpia todos los campos del formulario
}