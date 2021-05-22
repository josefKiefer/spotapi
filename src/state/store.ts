import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import personalizationReducer from '../slices/personalizationSlice';
import userReducer from '../slices/userSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        personalization: personalizationReducer,
        user: userReducer,
    },
});
