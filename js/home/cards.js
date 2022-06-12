const rootContent = document.querySelector(".root");

//Endpoint da api
const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

let pokeName;
let pokemon;
let card;

const inputSearch = document.createElement("input");
const button = document.createElement("button");
const section = document.createElement("section");
const span = document.createElement("span");

//Criando os elementos do fomrulário
export function forms() {
  const form = document.createElement("form");
  const label = document.createElement("label");

  form.setAttribute("class", "search");
  button.setAttribute("class", "btnSearch");
  label.setAttribute("class", "label");

  label.innerHTML = `Digite o nome do seu <b>#Pokemon</b> favorito`;
  button.innerHTML = `Search`;

  form.appendChild(label);
  form.appendChild(inputSearch);
  form.appendChild(button);

  //Criando o evento para que os pokemons renderizem na tela
  button.addEventListener("click", (e) => {
    e.preventDefault();

    //passando as entradas sejam somente nomes minusculos.
    pokeName = inputSearch.value.toLowerCase();

    startApp(pokeName);

    section.classList.add("fade");

    // Reseta o efeito fade removendo a classe fade
    setTimeout(() => {
      section.classList.remove("fade");
    }, 3000);
  });

  return rootContent.appendChild(form);
}

//Cards Pokemon criando elementos dos cards

export function cardsPoke() {
  section.setAttribute("class", "pokemon");
  span.setAttribute("class", "error");

  span.innerHTML = `Not Found!`;

  section.appendChild(span);

  return rootContent.appendChild(section);
}

//Função responsavel por fazer requisições para a Api e inserir respostas na variavel pokemon

function requestPokeInfo(url, name) {
  fetch(url + name)
    .then((response) => response.json())
    .then((data) => {
      pokemon = data;
    })
    .catch((err) => console.log(err));
}

//Função para rederizar os cards na tela

function createCard() {
  card = `
    <div class="pokemon-picture">
      <img src="${pokemon.sprites.front_default}" alt="Sprite of ${
    pokemon.name
  }">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Name: ${pokemon.name}</h1>
        <h2 class="number">Nº ${pokemon.id}</h2></br>
        <h3 class="type"><b>Type :</b> ${pokemon.types
          .map((item) => " " + item.type.name)
          .toString()}</h3>
        <h3 class="skill"><b>Skills :</b> ${pokemon.moves
          .map((item) => " " + item.move.name)
          .toString()}</h3>
        <h3 class="weight"><b>Weight: </b> ${pokemon.weight / 10}kg</h3>
        <h3 class="height"><b>Height: </b>${pokemon.height / 10}m</h3>
    </div>`;
  return card;
}

// Função que faz a chamada das principais funções e inicia o app
function startApp(pokeName) {
  requestPokeInfo(baseUrl, pokeName);

  setTimeout(function () {
    //Exibe uma mensagem caso o pokemon pesquisado não exista
    if (pokemon.detail) {
      span.style.display = "block";
      section.style.display = "none";
    } else {
      span.style.display = "none";
      section.style.display = "flex";
      section.innerHTML = createCard();
    }
  }, 2000);
}
