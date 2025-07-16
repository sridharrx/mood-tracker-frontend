import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.js';
import moodReducer from '../features/mood/moodSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mood: moodReducer,
  },
});
