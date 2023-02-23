import { configureStore } from '@reduxjs/toolkit';
import { greetingSlice } from '../features/greeting/greeting_slice';

const store = configureStore({
  reducer: {
    greeting: greetingSlice.reducer,
  },
});

export default store;
