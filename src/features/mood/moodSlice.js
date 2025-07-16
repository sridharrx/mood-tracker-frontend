import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [],
};

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    addMoodEntry(state, action) {
      state.entries.push(action.payload);
    },
  },
});

export const { addMoodEntry } = moodSlice.actions;
export default moodSlice.reducer;
