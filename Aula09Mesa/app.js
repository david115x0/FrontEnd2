
//Construa um formulário, usando javascript, com no mínimo três campos de input
//e esses campos de input terão comportamentos a decorrer de algumas condições. 
//Construa esses inputs de uma forma que quando forem preenchidos com algum conteúdo, 
//os campos receberão a propriedade “disabled”, mas quando o mouse estiver acima desse 
//campo ele vai perder essa propriedade possibilitando a modificação do conteúdo pelo usuário.
//Quando o mouse sair do input e o mesmo tiver preenchido, ele receberá a propriedade disabled novamente.



// Criando o formulario

let form = document.querySelector('form');

//Criando os inputs

let input1 = document.createElement('input');
form.appendChild(input1);
input1.setAttribute('id', "inp1");
input1.setAttribute('type', "text");
let secInput1 = document.getElementById("inp1");

valor = 0;
// o atributo ReadOnly quando o mouse estiver encima permitira escrever, mas quando o mouse estiver fora o será impossivel escrever
// isto substitue o disabled, que no caso funciona apenas uma vez;
secInput1.addEventListener("mousemove", ()=> {
    if ((valor == 0) && (input1.value != "")) {
     input1.style.backgroundColor = 'red';
     input1.readOnly = false;
    }
    return valor = 1;
});
// Se o campo estiver vazio nao ira deixar enviar nenhum tipo de dado;
secInput1.addEventListener("mouseout", ()=> {
    if ((valor == 1) && (input1.value != "")){
        input1.style.backgroundColor = 'green';
        input1.readOnly = true;
    }
    return valor = 0;
    
});
//Input2
let input2 = document.createElement('input');
form.appendChild(input2);
input2.setAttribute('id', "input2");
input2.setAttribute('type', "text");
let secInput2 = document.getElementById("input2");

secInput2.addEventListener("mousemove", ()=> {
    if ((valor == 0) && (input2.value != "")) {
     input2.style.backgroundColor = 'blue';
     input2.readOnly = false;
    }
    return valor = 1;
});
secInput2.addEventListener("mouseout", ()=> {
    if ((valor == 1) && (input2.value != "")) {
        input2.style.backgroundColor = 'yellow';
        input2.readOnly = true;
    }
    return valor = 0;
    
});


//input3
let input3 = document.createElement('input');
form.appendChild(input3);
input3.setAttribute('id', "input3");
input3.setAttribute('type', "text");
let secInput3 = document.getElementById("input3");

secInput3.addEventListener("mousemove", ()=> {
    if ((valor == 0) && (input3.value != "")) {
     input3.style.backgroundColor = 'purple';
     input3.readOnly = false;
    }
    return valor = 1;
});
secInput3.addEventListener("mouseout", ()=> {
    if ((valor == 1) && (input3.value != "")) {
        input3.style.backgroundColor = 'grey';
        input3.readOnly = true;
    }
    return valor = 0;
    
});


