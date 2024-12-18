import { Pokemon, PokemonsReponse } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { name: string };
}

//! Generar las rutas estáticas de los primeros 151 pokemons en tiempo de construcción de la aplicación
//gsp => Generación de rutas estáticas - snipet
export async function generateStaticParams() {
  const data: PokemonsReponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  ).then((resp) => resp.json());

  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name,
  }));

  return pokemons;
}



//metadata dinámica 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, name } = await getPokemon(params.name);

    return {
      title: `#${id} ${name}`,
      description: `Página del pokémon ${name}`,
    };
  } catch (error) {
    return {
      title: "Página del pokémon",
      description:
        "Culpa cupidatat ipsum magna reprehenderit ex tempor sint ad minim reprehenderit consequat sit.",
    };
  }
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      cache: "force-cache", // TODO: cambiar esto en un futuro
      // next: {
      //   revalidate: 60 * 60 * 30 * 6
      // }
    }).then((resp) => resp.json());

    console.log("Se cargó: ", pokemon.name);

    return pokemon;
  } catch (error) {
    notFound();
  }
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.name);

  return (
    <div className="flex flex-col items-center mt-5 text-slate-800">
      <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
        <div className="w-full mt-2 mb-8">
          <h1 className="px-2 text-xl font-bold capitalize text-slate-700">
            #{pokemon.id} {pokemon.name}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <Image
              src={pokemon.sprites.other?.dream_world.front_default ?? ""}
              width={150}
              height={150}
              alt={`Imagen del pokemon ${pokemon.name}`}
              className="mb-5"
            />

            <div className="flex flex-wrap">
              {pokemon.moves.map((move) => (
                <p key={move.move.name} className="mr-2 capitalize">
                  {move.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 px-2">
          <div className="flex flex-col items-start justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg ">
            <p className="text-sm text-gray-600">Types</p>
            <div className="flex text-base font-medium text-navy-700">
              {pokemon.types.map((type) => (
                <p key={type.slot} className="mr-2 capitalize">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg ">
            <p className="text-sm text-gray-600">Peso</p>
            <span className="flex text-base font-medium text-navy-700">
              {pokemon.weight}
            </span>
          </div>

          <div className="flex flex-col justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg">
            <p className="text-sm text-gray-600">Regular Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_default}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center px-3 py-4 bg-white rounded-2xl bg-clip-border drop-shadow-lg">
            <p className="text-sm text-gray-600">Shiny Sprites</p>
            <div className="flex justify-center">
              <Image
                src={pokemon.sprites.front_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                width={100}
                height={100}
                alt={`sprite ${pokemon.name}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
