import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import tracksReducer from '../slices/tracksSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tracks: tracksReducer
  },
});
