import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  return (
    <div className="mx-auto mt-4 w-52">
      {/* Establecer un alto mínimo para asegurar el tamaño uniforme */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
        {/* Sección superior con la imagen */}
        <div className="h-60 bg-gray-800 border-b flex flex-col justify-between">
          {/* Centrando la imagen */}
          <div className="flex justify-center pt-5">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={100}
              height={100}
              alt={name}
            />
          </div>

          {/* Contenedor inferior: nombre y botón */}
          <div className="px-4 pb-4 flex flex-col justify-end items-center">
            {/* Nombre del Pokémon */}
            <p className="text-lg font-semibold text-gray-50">{name}</p>

            {/* Botón más información */}
            <Link
              href={`dashboard/pokemon/${id}`}
              className="mt-2 border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>

        {/* Sección de enlaces con espaciado */}
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
              <IoHeartOutline className="w-5 h-5" />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es Favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
