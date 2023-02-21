//create array with pokemon objects
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
