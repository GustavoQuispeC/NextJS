import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, RootState } from '..';

interface CounterState {
    count: number;
}
const initialState : CounterState = {
    count : 5,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
 
   
  }
   
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;

export const useAppDispatch : () => AppDispatch = useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;