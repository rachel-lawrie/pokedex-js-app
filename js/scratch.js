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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    add: add,
  };
})();

console.log(pokemonRepository);
