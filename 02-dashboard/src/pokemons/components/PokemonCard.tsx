import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}


export const PokemonCard = ({ pokemon }:Props) => {

  const { id, name } = pokemon;


  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="flex flex-col overflow-hidden bg-white rounded shadow-lg">
        <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800 border-b">

          <Image 
              key={ pokemon.id }
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg`}
              width={100}
              height={100}
              alt={ pokemon.name }
              priority={ false }
            />


          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">{ name }</p>
          <div className="mt-5">
            <Link
              href={`dashboard/pokemon/${ name }`}
              className="px-4 py-2 text-xs font-semibold text-gray-100 border rounded-full"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/dashboard/main" className="flex items-center px-4 py-2 hover:bg-gray-100">

              <div className="text-red-600">
                <IoHeartOutline />
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium leading-none text-gray-800">
                  No es favorito
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
          </Link>
          
        </div>

      </div>
    </div>
  )
}
