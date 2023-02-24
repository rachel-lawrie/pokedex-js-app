//create array with pokemon objects
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "charmander",
      height: 0.6,
      type: ["fire"],
    },
    {
      name: "arbok",
      height: 3.5,
      type: ["poison"],
    },
    {
      name: "jigglypuff",
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

  return {
    add: add,
    getAll: getAll,
  };
})();

//document.write(pokemonRepository.getAll());
//write list of pokemon and their heights in the DOM, and highlight bigger pokemons

pokemonList.getAll.forEach (function(pokemon){

if (pokemon.height > 3) {
    document.write(
      pokemon.name +
        "(height " +
        pokemon.height +
        ")" +
        " - wow that's big!" +
        "<br>"
    );
  } else {
    document.write(pokemon.name + "(height " + pokemon.height + ")" + "<br>");
  }
});

/*function getAll(){
    pokemonList.forEach(pokemon){
        document.write(pokemon.name + "(height " + pokemon.height + ")" + "<br>")
    };
}

/*pokemonList.forEach(function (pokemon) {
  if (pokemon.height > 3) {
    document.write(
      pokemon.name +
        "(height " +
        pokemon.height +
        ")" +
        " - wow that's big!" +
        "<br>"
    );
  } else {
    document.write(pokemon.name + "(height " + pokemon.height + ")" + "<br>");
  }
});
