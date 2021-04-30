import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import tracksReducer from '../slices/tracksSlice';
import artistsReducer from '../slices/artistsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tracks: tracksReducer,
        artists: artistsReducer,
    },
});
