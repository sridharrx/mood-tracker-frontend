import { createSlice } from '@reduxjs/toolkit';

const moodSlice = createSlice({
  name: 'mood',
  initialState: {
    entries: [],
  },
  reducers: {
    addMoodEntry(state, action) {
      state.entries.push(action.payload);
    },
  },
});

export const { addMoodEntry } = moodSlice.actions;
export default moodSlice.reducer;
