
const categories = document.querySelectorAll(".category");

categories.forEach(category => {
category.addEventListener("click", () => {
    categories.forEach(c => c.classList.remove("active"));
    category.classList.add("active");
    });
  });



  // barra de pesquisa aparecendo na header


  function toggle_pesquisa() {
    const barraDeBusca = document.getElementById("search-container");
    const navLinks = document.querySelector(".nav-links");

    const estaVisivel = barraDeBusca.style.display === "flex";

    // Alterna a visibilidade da barra de busca
    barraDeBusca.style.display = estaVisivel ? "none" : "flex";

    // Esconde ou mostra os links de navegação
    navLinks.style.display = estaVisivel ? "flex" : "none";
}


const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
const cardWidth = track.querySelector('.product-card').offsetWidth + 10; // padding

nextBtn.addEventListener('click', () => {
  const maxScroll = track.scrollWidth - track.clientWidth;
  const newPosition = (currentIndex + 1) * cardWidth;

  if (newPosition <= maxScroll) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
