import { forms } from "./cards.js";
import { cardsPoke } from "./cards.js";

//Conteudo principal
export function home() {
  const rootContent = document.querySelector(".root");
  const formsContainer = forms();
  const containerCardsPoke = cardsPoke();

  const main = document.createElement("main");
  main.setAttribute("class", "container");

  const sectionApresentacao = document.createElement("section");
  const title = document.createElement("h1");
  const img = document.createElement("img");

  sectionApresentacao.setAttribute("class", "apresentacao-container");

  title.setAttribute("class", "title-principal");
  title.innerHTML = `Poke <b>Search</b>`;

  img.setAttribute("src", "./img/pokeball.png");

  sectionApresentacao.appendChild(title);
  sectionApresentacao.appendChild(img);

  main.appendChild(sectionApresentacao);
  main.appendChild(formsContainer);
  main.appendChild(containerCardsPoke);

  return rootContent.appendChild(main);
}
home();
