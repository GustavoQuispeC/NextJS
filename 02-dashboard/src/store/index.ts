import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './counter/counterSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import pokemonsReducer from './pokemons/pokemons'


export const store = configureStore({
  reducer: {
   
    counter: CounterReducer,
    pokemons: pokemonsReducer,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch : () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;