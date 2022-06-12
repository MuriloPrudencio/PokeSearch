const rootContent = document.querySelector(".root");

export function content() {
  const sectionContent = document.createElement("section");
  sectionContent.setAttribute("class", "content-container");
  const content = document.createElement("p");
  content.setAttribute("class", "content");

  content.innerHTML = `<b>Poke</b> Search, uma plataforma feita para você, que assim como eu, é apaixonado por <b>Pokemon</b>. </br></br>
    Você se lembra de como saia da escola, na época? </br>
    Ansioso para chegar em casa e assistir o desenho.</br></br>
    <p>Então basta pesquisar pelo nome de seu <b>Pokemon</b> favorito, e matar a saudade.</p>
  `;

  sectionContent.appendChild(content);

  return rootContent.appendChild(sectionContent);
}
