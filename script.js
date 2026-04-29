let musica = document.getElementById("musica");

// ENTRAR + MÚSICA
function entrar() {
    cambiarPantalla("pantalla1", "pantalla2");

    musica.volume = 0;
    musica.play();

    let vol = 0;
    let subir = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            musica.volume = vol;
        } else {
            clearInterval(subir);
        }
    }, 200);
}

// IR A PANTALLA FINAL
function irFinal() {
    cambiarPantalla("pantalla2", "pantalla3");
}

// CAMBIAR PANTALLAS
function cambiarPantalla(actual, siguiente) {
    document.getElementById(actual).style.display = "none";
    document.getElementById(siguiente).style.display = "block";
}

// CARRUSEL
let index = 0;
let slides = document.querySelectorAll(".slide");

function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove("activo"));
    slides[i].classList.add("activo");
}

function siguiente() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}

function anterior() {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
}