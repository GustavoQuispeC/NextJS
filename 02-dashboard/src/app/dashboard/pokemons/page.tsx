import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from 'next/image';


const getPokemons = async (limit=20, offset=0):Promise<SimplePokemon[]> => {
  const data : PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(response => response.json());

  const pokemons = data.results.map(pokemon => ({
      id: pokemon.url.split('/').at(-2) as string,
      name: pokemon.name,
  }));

  return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(200);
   
  return (
    <div className="flex flex-col">
        <div className="flex flex-wrap gap-10 items-center justify-center">
        <ul className="grid grid-cols-4 gap-4">
            {pokemons.map(pokemon => (
            <li key={pokemon.id} className="bg-gray-100 p-4 rounded-lg">
                <span className="text-xl font-bold">{pokemon.name}</span>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                width={100} 
                height={100} 
                alt={pokemon.name}
                />

            </li>
            ))}
        </ul>
        </div>
       
    </div>
  );
}

