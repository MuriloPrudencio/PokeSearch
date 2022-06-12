import { content } from "./content.js";

const rootContent = document.querySelector(".root");

export function sobre() {
  const contentContainer = content();

  const main = document.createElement("main");
  main.setAttribute("class", "container");

  const sectionApresentacao = document.createElement("section");
  const title = document.createElement("h1");
  const img = document.createElement("img");
  img.setAttribute("class", "charizard");

  sectionApresentacao.setAttribute("class", "apresentacao-container");

  title.setAttribute("class", "title-principal");
  title.innerHTML = `Poke <b>Search</b>`;

  img.setAttribute("src", "./img/charizard.png");

  sectionApresentacao.appendChild(title);
  sectionApresentacao.appendChild(img);

  main.appendChild(sectionApresentacao);
  main.appendChild(contentContainer);

  return rootContent.appendChild(main);
}
sobre();
