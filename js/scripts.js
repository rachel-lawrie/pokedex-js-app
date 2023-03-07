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
      function populateTypes(pokemon) {
        let typesarray = [];
        var types = pokemon.types[i];
        for (var i = 0; i < pokemon.types.length; i++) {
          typesarray.push(i);
          console.log(typesarray);
        }
      }

      let details = "height: " + pokemon.height + "\r\n" + "types: ";
      let imagelink = pokemon.imageUrl;
      showModal(pokemon.name, details, imagelink);
      // want to make image appear rather than URL
      // also want to include the types

      //old code that console logged the pokemon details
      // function showDetails(pokemon) {
      //   loadDetails(pokemon).then(function () {
      // console.log(pokemon);
    });
  }

  function addListItem(pokemon) {
    let pokemonListItems = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
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
        // Now we add the details to the item
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
    let modalContainer = document.querySelector("#modal-container");

    modalContainer.innerHTML = "";

    //add content
    let modal = document.createElement("div");
    modal.classList.add("modal");
    // add image
    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("id", "pokemon-image");
    pokemonImage.src = imagelink;
    //add close button
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "X";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = title;

    let contentElement = document.createElement("p");
    contentElement.innerText = text;

    //added line may need to delete
    modal.appendChild(pokemonImage);
    //continue here
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");

    modalContainer.addEventListener("click", (e) => {
      // close modal if user clicks outside of modal (on modalContainer)
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    // showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

//write list of pokemon and their heights in the DOM, and highlight bigger pokemons
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// pokemonRepository.showModal();
