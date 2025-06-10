
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function updateCarousel() {
  const slide = carousel.querySelector(".polaroid");
  const slideWidth = slide.offsetWidth + 20; // largura + margem horizontal (10px de cada lado)
  const offset = -currentIndex * slideWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

window.addEventListener("load", updateCarousel);
