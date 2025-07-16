import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 1 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      if (state.value < 10) state.value += 1;
    },
    decrement(state) {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
