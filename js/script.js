
const botonTema = document.getElementById("dark-mode-toggle");
const pagina = document.documentElement;
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro") {
    pagina.classList.add("dark-mode");
} else if (temaGuardado === "claro") {
    pagina.classList.remove("dark-mode");
}

function actualizarBoton() {
    if (pagina.classList.contains("dark-mode")) {
        botonTema.textContent = "☀️ Modo claro";
    } else {
        botonTema.textContent = "🌙 Modo oscuro";
    }
}

actualizarBoton();

botonTema.addEventListener("click", function () {
    pagina.classList.toggle("dark-mode");

    
    if (pagina.classList.contains("dark-mode")) {
        localStorage.setItem("tema", "oscuro");
    } else {
        localStorage.setItem("tema", "claro");
    }

    actualizarBoton();
});