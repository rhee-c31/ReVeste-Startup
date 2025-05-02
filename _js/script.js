
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


