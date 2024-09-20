import { PokemonGrid, PokemonsReponse, SimplePokemon } from "@/pokemons";

export const metadata = {
    title: 'favorites',
    description: 'Listado de los primeros 151 pokémons',
    }

export default async function PokemonsPage() {

  
  return (
    <div className="flex flex-col">

      <span className="my-2 text-5xl">Pokémons Favoritos  <small className="text-blue-500">Global State</small></span>
      
      <PokemonGrid pokemons={ [] } />

    </div>
  );
}