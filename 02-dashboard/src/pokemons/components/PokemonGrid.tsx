import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}


export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">

        {
          pokemons.map( pokemon => (
            <PokemonCard key={ pokemon.name } pokemon={pokemon} />            
          ))
        }
        
    </div>
  )
}
