"use client";
import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const onToggle = () => {
    console.log("click", pokemon);
    dispatch({ type: "pokemons/toggleFavorite", payload: pokemon });
  };

  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-lg">
        <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false} //cargado bajo demanda
          />

          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`dashboard/pokemon/${name}`}
              className="px-4 py-2 text-xs font-semibold text-gray-100 border rounded-full"
            >
              Más información
            </Link>
          </div>
        </div>
        <div onClick={onToggle} className="border-b">
          <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100">
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function dispatch(arg: {
  payload: SimplePokemon;
  type: "pokemons/toggleFavorite";
}) {
  throw new Error("Function not implemented.");
}
