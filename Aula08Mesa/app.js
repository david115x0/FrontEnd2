let form = document.querySelector('form');

form.innerHTML = "<h1>Login</h1>";

let inputEmail = document.createElement('input');
form.appendChild(inputEmail);
inputEmail.setAttribute('placeholder', 'email');

let inputPassword = document.createElement('input');
form.appendChild(inputPassword);
inputPassword.setAttribute('type', 'password');

let btnEnviar = document.createElement('button');
form.appendChild(btnEnviar);
btnEnviar.setAttribute('id', "btnE")
btnEnviar.setAttribute('onmouseover', "mudarCor(this)");
btnEnviar.setAttribute('onmouseout', "mudarCor(this)");
btnEnviar.innerText = "Submit";

let btnReset = document.createElement('button');
form.appendChild(btnReset);
btnReset.setAttribute('id', "btnR")
btnReset.setAttribute('onmouseover', "mudarCor(this)");
btnReset.setAttribute('onmouseout', "mudarCor(this)");
btnReset.innerText = "reset";

inputEmail.disabled = false;

inputEmail.style.display = "block";
inputPassword.style.display = "block";
inputPassword.style.marginBottom = "1rem";
btnEnviar.style.marginRight = "1rem";

// inputEmail.removeAttribute('placeholder');


// Aula08 MESA
// EX1
document.getElementById("btnE").addEventListener("click", function (evento) {
    evento.preventDefault();
})
//EX2
let body = document.querySelector("body");
body.onload = function () {
    alert("Olá")
};

// EX3 btnE e btnReset

let corBotaoE = document.getElementById("btnE");
corBotaoE.onmouseover = function () {
    corBotaoE.style.backgroundColor = '#f00';
}
corBotaoE.onmouseout = function () {
    corBotaoE.style.backgroundColor = 'blue';
}

let corBotaoR = document.getElementById("btnR");

corBotaoR.onmouseover = function () {
    corBotaoR.style.backgroundColor = 'pink';
}
corBotaoR.onmouseout = function () {
    corBotaoR.style.backgroundColor = 'green';
};

//EX05

//Criando os inputs e tags
let escrita = document.createElement('p');
form.appendChild(escrita);
escrita.setAttribute('id', "textoP");

let inputP = document.createElement('input');
form.appendChild(inputP);
inputP.setAttribute('type', "text");
inputP.setAttribute('id', "meucampo");
inputP.setAttribute('value', "")

//

contador = 0;

//Aqui criamos um texto dentro da teg P, com o contador em 0;
escrita.innerText = `Quantidade de teclas precionadas: ${contador}`;

// Criamos um evento de teclado, definido para a tecla Backspace, 
inputP.addEventListener('keyup', function (evento) {

    //Aqui criamos outro texo dentro na teg P, que irá substituir o texto acima, antes da tecla de Backspace
    escrita.innerText = `Quantidade de teclas precionadas: ${contador = contador + 1} `;

    //Utilizamos a condicional para zerar o contador do P
    if (evento.keyCode === 8) {
        evento.preventDefault(); // Nao tira a propriedade antigado do botao delete
        document.getElementById("meucampo").value = "";// Limpa o campo quando o Backspace é precionado
        alert("você limpou os dados inseridos!!!");
        // subistituimos outra vez o texo da tag P, e desta vez com o contador = 0. 
        //este passo vai dar a impressão de que a contagem das teclas foram resetadas.
        //Observe em seu navegador que a palavra precisionadas tem duas letras ii.
        return escrita.innerText = `Quantidade de teclas preciionadas: ${contador = 0}`;
    }
    
});
//Estes códigos abaixo, são testes de como usar o Evento de teclado:

/**window.addEventListener('keyup', (event) => {
    if (event.key === 's' && event.ctrlkey) {
        event.preventDefault();
        alert("correct")
    }
});**/
window.addEventListener('keyup', (event) => {
    if (event.keyCode === 8) {
        event.preventDefault();
        alert("correct")
    }
});





