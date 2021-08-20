let situacao = confirm("Para acessar o sistema - pressione OK");

if(situacao==true) {
    // redirecionar o usuario para a pagina de acesso permitido
    window.location.href="acessoPermitido.html";
}else {
    window.location.href="acessoNegado.html";
};