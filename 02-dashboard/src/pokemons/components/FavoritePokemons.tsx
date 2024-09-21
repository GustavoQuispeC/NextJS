'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";


  
export const FavoritePokemons = () => {

    const favoritesPokemons = useAppSelector((state) => Object.values(state.pokemons.favorites) );



  return (
    // <PokemonGrid 
    // pokemons={favoritesPokemons}/>
    <PokemonGrid pokemons={favoritesPokemons}/>
   
  )
}
