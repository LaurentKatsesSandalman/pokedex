import "./App.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
  const [pokemonName, setPokemonName] = useState("bulbasaur")
  const pokemon = pokemonList.find((goodPokemon) => goodPokemon.name === pokemonName);

  if (pokemon == null) { throw new Error("Invalid Pokémon name") }

  return (
    <div>
      <nav>
        {pokemonList.map((pokemon) => (
          <button key={pokemon.name} type="button" onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>

        ))

        }
        {/* <button type="button" onClick={() => setPokemonName(pokemonName0)}>{pokemonList[0].name}</button>
      <button type="button" onClick={() => setPokemonName(pokemonName1)}>{pokemonList[1].name}</button>*/}

      </nav>
      <PokemonCard pokemon={pokemon} />

    </div>
  );
}

export default App;