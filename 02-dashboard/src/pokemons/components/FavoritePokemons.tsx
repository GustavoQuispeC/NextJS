'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";


  
export const FavoritePokemons = () => {

    const favoritesPokemons = useAppSelector((state) => Object.values(state.pokemons) );

   const [pokemons, setPokemons] = useState(favoritesPokemons);

  return (
    // <PokemonGrid 
    // pokemons={favoritesPokemons}/>
    <PokemonGrid pokemons={pokemons}/>
   
  )
}
