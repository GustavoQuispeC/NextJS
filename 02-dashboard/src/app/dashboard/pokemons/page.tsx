import { PokemonsResponse, PokemosnGrid, SimplePokemon } from "@/app/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2) as string,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(200);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemones <small> Estaticos</small>{" "}
      </span>

      <PokemosnGrid pokemons={pokemons} />
    </div>
  );
}
