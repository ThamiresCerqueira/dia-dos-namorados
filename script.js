
function mostrarAnimacao() {
  const animacao = document.getElementById('animacaoFinal');
  animacao.style.display = 'flex';
  gerarCorações();
}

function gerarCorações() {
  const container = document.getElementById('corações');
  for (let i = 0; i < 30; i++) {
    const coração = document.createElement('div');
    coração.classList.add('coração-anima');
    coração.style.left = Math.random() * 100 + 'vw';
    coração.style.fontSize = (Math.random() * 10 + 16) + 'px';
    coração.innerText = '❤️';
    container.appendChild(coração);

    setTimeout(() => {
      container.removeChild(coração);
    }, 4000);
  }
}
