
const fotos = [
  'Foto1.comvocê.jpeg',
  'Foto2.acimadetudo.jpeg',
  'Foto3.sempremelhor.jpeg',
  'Foto4.encontrei.jpeg',
  'Foto5.protegida.jpeg',
  'Foto6.séries.jpeg',
  'Foto7.memes.jpeg',
  'Foto8.melhoramigo.jpeg',
  'Foto9.mefazsorrir.jpeg',
  'Foto10.inteligência.jpeg',
  'Foto11.planejar.jpeg',
  'Foto12.líder.jpeg'
];

const frases = [
  "Eu te amo porque posso ser exatamente quem sou quando estou com você.",
  "Eu te amo porque você me apoia acima de tudo.",
  "Eu te amo porque você sempre quer ser o melhor e me dar o melhor.",
  "Eu amo olhar para você e pensar: encontrei.",
  "Eu amo como me sinto cuidada, amada e protegida por você.",
  "Eu te amo porque você é a pessoa ideal para maratonar séries.",
  "Eu te amo porque você me envia os melhores memes.",
  "Eu amo que você também é o meu melhor amigo.",
  "Eu amo como você me faz sorrir.",
  "Eu amo a sua inteligência.",
  "Eu amo planejar o meu futuro com você.",
  "Eu amo seguir a sua liderança e te ver amando Jesus, se tornando um homem segundo o coração dEle."
];

const track = document.getElementById('track');

fotos.forEach((foto, i) => {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.innerHTML = `
    <div class="polaroid">
      <img src="${foto}" alt="Foto${i+1}">
      <div class="phrase">${frases[i]}</div>
    </div>`;
  track.appendChild(slide);
});

// Último Slide
const finalSlide = document.createElement('div');
finalSlide.className = 'slide';
finalSlide.innerHTML = `
  <div class="polaroid">
    <div class="phrase" style="font-size: 2rem">Eu te amo!</div>
    <div class="phrase" style="color:red; font-size: 1.2rem">Feliz dia dos namorados</div>
    <div class="phrase">12.06.2025</div>
    <div class="phrase">&hearts;</div>
    <button onclick="startHearts()">Clique aqui</button>
  </div>`;
track.appendChild(finalSlide);

let currentIndex = 0;

function moveSlide(n) {
  const total = track.children.length;
  currentIndex += n;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= total) currentIndex = total - 1;
  track.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function startHearts() {
  setInterval(function () {
    const r_num = Math.floor(Math.random() * 40) + 1;
    const r_size = Math.floor(Math.random() * 65) + 10;
    const r_left = Math.floor(Math.random() * 100) + 1;
    const r_bg = Math.floor(Math.random() * 25) + 100;
    const r_time = Math.floor(Math.random() * 5) + 5;
    const bg_heart = document.querySelector('.bg_heart');

    const heart1 = document.createElement('div');
    heart1.className = 'heart';
    heart1.style.cssText = `width:${r_size}px;height:${r_size}px;left:${r_left}%;background:rgba(255,${r_bg - 25},${r_bg},1);animation:love ${r_time}s ease;`;
    bg_heart.appendChild(heart1);

    const heart2 = document.createElement('div');
    heart2.className = 'heart';
    heart2.style.cssText = `width:${r_size - 10}px;height:${r_size - 10}px;left:${r_left + r_num}%;background:rgba(255,${r_bg - 25},${r_bg + 25},1);animation:love ${r_time + 5}s ease;`;
    bg_heart.appendChild(heart2);
  }, 500);
}

