import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";

/*
{
    '1': {id:1, name: 'bulbasaur'},
    '2': {id:2, name: 'ivysaur'},
    '3': {id:3, name: 'venusaur'},
}
*/

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": { id: "1", name: "bulbasaur" },
};

const Slice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export const {} = Slice.actions;

export default Slice.reducer;
