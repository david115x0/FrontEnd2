
var titulo = document.createElement("p");
var texto = document.createTextNode("aula 07 - appendChild");

function iniciar(){
    titulo.appendChild(texto);
    document.body.appendChild(titulo);
};

window.addEventListener("load", iniciar);