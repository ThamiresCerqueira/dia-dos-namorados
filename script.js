
const polaroidContainer = document.getElementById('polaroidContainer');
const totalSlides = polaroidContainer.children.length;
let currentIndex = 0;

function updateSlide() {
  const slideWidth = document.querySelector('.slider').offsetWidth;
  polaroidContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlide();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
}

window.addEventListener('resize', updateSlide);

function startHearts() {
  setInterval(function () {
    const r_num = Math.floor(Math.random() * 40) + 1;
    const r_size = Math.floor(Math.random() * 65) + 10;
    const r_left = Math.floor(Math.random() * 100) + 1;
    const r_bg = Math.floor(Math.random() * 25) + 100;
    const r_time = Math.floor(Math.random() * 5) + 5;

    const heart1 = document.createElement("div");
    heart1.className = "heart";
    heart1.style.cssText = `
      width:${r_size}px;
      height:${r_size}px;
      left:${r_left}%;
      background:rgba(255,${r_bg - 25},${r_bg},1);
      animation: love ${r_time}s ease forwards;
    `;

    const heart2 = document.createElement("div");
    heart2.className = "heart";
    heart2.style.cssText = `
      width:${r_size - 10}px;
      height:${r_size - 10}px;
      left:${r_left + r_num}%;
      background:rgba(255,${r_bg - 25},${r_bg + 25},1);
      animation: love ${r_time + 5}s ease forwards;
    `;

    document.querySelector(".bg_heart").appendChild(heart1);
    document.querySelector(".bg_heart").appendChild(heart2);
  }, 300);
}
