import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/*
{
  {
    '1': {id:1, name: 'bulbasaur'},
    '2': {id:2, name: 'ivysaur'},
    '3': {id:3, name: 'venusaur'},
  }
    
}
*/

interface PokemonsState {
 favorites:{ [key: string]: SimplePokemon};
}

const getInitialState = () => {

  //!ayudara a pasar el build de vercel
  // if (typeof window === "undefined") {
  //   return {};
  // }



  // const favorites = JSON.parse(
  //   localStorage.getItem("favoritesPokemons") ?? "{}"
  // );

  // return favorites;
};

const initialState: PokemonsState = {
  favorites: {},

  
  //...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "2": { id: "2", name: "ivysaur" },
  // "3": { id: "3", name: "venusaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{[key:string]:SimplePokemon}>) {
      state.favorites = action.payload;

      
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        //return;
      } else {
        state.favorites[id] = pokemon;
      }
      //TODO:No se debe hacer esto en un redux
      localStorage.setItem("favoritesPokemons", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
