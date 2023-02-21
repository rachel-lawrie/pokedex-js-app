//create pokemon objects
let pokemon1 = {
  name: "charmander",
  height: 0.6,
  type: "fire",
};
let pokemon2 = {
  name: "arbok",
  height: 3.5,
  type: "poison",
};
let pokemon3 = {
  name: "jigglypuff",
  height: 0.5,
  type: "fairy",
};

//create array filled with the pokemon objects
let pokemonList = [pokemon1, pokemon2, pokemon3];

//write list of pokemon and their heights in the DOM, and highlight bigger pokemons
let pokemonListString = "";
let i = 0;
for (; pokemonList[i]; ) {
  if (pokemonList[i].height > 3) {
    pokemonListString =
      pokemonListString +
      " " +
      pokemonList[i].name +
      "(height " +
      pokemonList[i].height +
      ")" +
      " - wow that's big!" +
      "<br>";
  } else {
    pokemonListString =
      pokemonListString +
      " " +
      pokemonList[i].name +
      "(height " +
      pokemonList[i].height +
      ")" +
      "<br>";
  }
  i++;
}

document.write(pokemonListString);
