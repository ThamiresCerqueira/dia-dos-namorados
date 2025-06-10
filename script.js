
function showSlide(index) {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const slide = slides[index];
  const slideDiv = document.createElement('div');
  slideDiv.className = 'polaroid';

  const img = document.createElement('img');
  img.src = slide.image;
  img.alt = slide.text;

  const caption = document.createElement('p');
  caption.textContent = slide.text;

  slideDiv.appendChild(img);
  slideDiv.appendChild(caption);
  container.appendChild(slideDiv);
}

const fotos = [
  {
    imagem: "",
    frase: `<div class="pagina-especial capa">12 coisas que amo sobre você!<br>❤️</div>`
  },
  {
    imagem: "imagens/Foto1.comvocê.jpeg",
    frase: "Eu te amo porque posso ser exatamente quem sou quando estou com você."
  },
  {
    imagem: "imagens/Foto2.acimadetudo.jpeg",
    frase: "Eu te amo porque você me apoia acima de tudo."
  },
  {
    imagem: "imagens/Foto3.sempremelhor.jpeg",
    frase: "Eu te amo porque você sempre quer ser 
      o melhor e me dar o melhor."
  },
  {
    imagem: "imagens/Foto4.encontrei.jpeg",
    frase: "Eu amo olhar para você e pensar: encontrei."
  },
  {
    imagem: "imagens/Foto5.protegida.jpeg",
    frase: "Eu amo como me sinto cuidada, amada e protegida por você."
  },
  {
    imagem: "imagens/Foto6.séries.jpeg",
    frase: "Eu te amo porque você é a pessoa ideal para 
      maratonar séries."
  },
  {
    imagem: "imagens/Foto7.memes.jpg",
    frase: "Eu te amo porque você me envia os melhores memes."
  },
  {
    imagem: "imagens/Foto8.melhoramigo.jpeg",
    frase: "Eu amo que você também é o meu melhor amigo."
  },
  {
    imagem: "imagens/Foto9.mefazsorrir.jpeg",
    frase: "Eu amo como você me faz sorrir."
  },
  {
    imagem: "imagens/Foto10.inteligência.jpeg",
    frase: "Eu amo a sua inteligência."
  },
  {
    imagem: "imagens/Foto11.planejar.jpeg",
    frase: "Eu amo planejar o meu futuro com você."
  },
  {
    imagem: "imagens/Foto12.líder.jpeg",
    frase: "Eu amo seguir a sua liderança e te ver amando Jesus, 
      se tornando um homem segundo o coração dEle."
  },
  {
    imagem: "",
    frase: `<div class="pagina-especial final">
      <div style="font-family: 'Great Vibes', cursive; font-size: 36px;">Eu te amo!</div>
      <div style="color: red; font-size: 20px;">Feliz Dia dos Namorados</div>
      <div>12.06.2025</div>
      <div>❤️</div>
    </div>`
  }
];

let index = 0;
const container = document.getElementById("container");

function renderizarPagina() {
  container.innerHTML = "";
  const item = fotos[index];
  const card = document.createElement("div");

  if (item.imagem) {
    card.className = "polaroid";
    const img = document.createElement("img");
    img.src = item.imagem;
    img.onerror = () => img.alt = "Imagem não encontrada";
    const caption = document.createElement("p");
    caption.innerHTML = item.frase;
    card.appendChild(img);
    card.appendChild(caption);
  } else {
    card.innerHTML = item.frase;
  }

  container.appendChild(card);
}

document.getElementById("prev").onclick = () => {
  if (index > 0) {
    index--;
    renderizarPagina();
  }
};

document.getElementById("next").onclick = () => {
  if (index < fotos.length - 1) {
    index++;
    renderizarPagina();
  }
};

renderizarPagina();
