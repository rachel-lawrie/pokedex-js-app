//create array with pokemon objects
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //create modal to display pokemon details (name, height, img and types) to user when clicked
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      let types = pokemon.types.map((type) => type.type.name).join(",");
      let details = "height: " + pokemon.height + "\r\n" + "types: " + types;
      let imagelink = pokemon.imageUrl;

      showModal(pokemon.name, details, imagelink);
    });
  }

  function addListItem(pokemon) {
    let pokemonListItems = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn", "btn-dark");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#modalContainer");
    listItem.appendChild(button);
    pokemonListItems.appendChild(listItem);
    //log pokemon details when clicked
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  //fetch name and url from api, and push pokemon to pokemonList
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // add class when clicked to make modal visible
  function showModal(title, text, imagelink) {
    let modalContainer = document.querySelector("#modalContainer");

    //add title
    let modalTitle = document.querySelector(".modal-title");
    modalTitle.innerHTML = "";
    modalTitle.innerHTML = title;

    //add body content
    let modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = text;

    //add image
    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("id", "pokemon-image");
    pokemonImage.src = imagelink;

    modalBody.appendChild(pokemonImage);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    // showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
