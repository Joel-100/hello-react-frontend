import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRandomGreeting } from './greeting_api';

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: 'Wait for it ........',
  },
  reducers: {
    setGreeting: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export const getRandomGreeting = createAsyncThunk(
    'greeting/getRandomGreeting',
    async () => {
      const response = await fetchRandomGreeting();
      return response;
    }
  );