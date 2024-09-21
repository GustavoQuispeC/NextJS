import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {
        // Verificamos si hay pokemons antes de mapear
        pokemons.length > 0 ? (
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />  // Usar 'id' si está disponible como key
          ))
        ) : (
          <NoFavorites />
        )
      }
    </div>
  );
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span >No hay pokémons favoritos</span>
    </div>
  );
};