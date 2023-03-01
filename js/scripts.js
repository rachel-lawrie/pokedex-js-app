//create array with pokemon objects
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Charmander",
      height: 0.6,
      type: ["fire"],
    },
    {
      name: "Arbok",
      height: 3.5,
      type: ["poison"],
    },
    {
      name: "Jigglypuff",
      height: 0.5,
      type: ["fairy", "normal"],
    },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemonList[pokemon]);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };

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
})();

//write list of pokemon and their heights in the DOM, and highlight bigger pokemons
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
