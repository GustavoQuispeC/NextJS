
import { SimplePokemon } from '../interfaces/simple-pokemon';
import { PokemonCard } from './PokemonCard';



interface Props {
    pokemons : SimplePokemon[];
}

export const PokemosnGrid = ({pokemons}:Props) => {
    return(
        <>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                <ul className="grid grid-cols-4 gap-8">
                    {pokemons.map((pokemon: SimplePokemon) => (
                       
                        <PokemonCard 
                        key={pokemon.id} pokemon={pokemon}
                        
                    
                        
                        />
                    ))}

                </ul>
              
            </div>
        </>
    )
}