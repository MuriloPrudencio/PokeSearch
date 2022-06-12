const rootContent = document.querySelector(".root");

//Criando os elementos de cabeçalho da página.
export function header() {
  const headerContainer = document.createElement("header");
  const figure = document.createElement("figure");
  const title = document.createElement("h1");
  const img = document.createElement("img");
  const nav = document.createElement("nav");
  const home = document.createElement("a");
  const sobre = document.createElement("a");

  headerContainer.setAttribute("class", "header");
  figure.setAttribute("class", "logo");
  nav.setAttribute("class", "nav");

  img.setAttribute("src", `./img/pokeball.png`);
  title.innerText = `Poke Search`;
  figure.appendChild(img);
  figure.appendChild(title);

  home.innerText = `Home`;
  home.setAttribute("href", `index.html`);

  sobre.innerText = `Sobre`;
  sobre.setAttribute("href", `./sobre.html`);

  nav.appendChild(home);
  nav.appendChild(sobre);

  headerContainer.appendChild(figure);
  headerContainer.appendChild(nav);

  return rootContent.appendChild(headerContainer);
}

header();
