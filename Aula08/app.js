function mudarCor(objDiv, cor) {
    objDiv.style.backgroundColor=cor;
};

function mudarPosicao(obj) {
    obj.style.position = "absolute";
    obj.style.left = Math.random()*500+"px";
    obj.style.top = Math.random()*500+"px";
};

function cumprimentarAutomatico() {
    var data = new Date();
    var hora = data.getHours();
    if(hora < 12) {
        mensagem = "Bom Dia!";
    } else if (hora < 18) {
        mensagem = "Bom Tarde!";
    }else {
        mensagem = "Boa Noite!"
    }
    alert("olá, "+mensagem);
}