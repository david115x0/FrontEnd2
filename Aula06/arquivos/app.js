
function mudar() {
    
    let botao = document.querySelector('.btn-mudarTitulo');
    
    botao.style.color = 'black';
    botao.style.textAlign = 'center';
    botao.style.fontSize = '22px';
    botao.style.backgroundColor = '#fff';
};
document.addEventListener('click', mudar);