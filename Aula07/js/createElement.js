var titulo = document.createElement("h1");
titulo.textContent = "Aula 07 - Create Document";

function iniciar() {
    document.body.appendChild(titulo);
}
window.addEventListener("load", iniciar);