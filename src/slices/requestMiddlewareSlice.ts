import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { authorizeAsync } from './authSlice';

export const handleAxiosError = createAsyncThunk(
    'requestMiddleware/handleAxiosError',
    (axiosError: AxiosError, thunkApi) => {
        const errorMessage: string = axiosError.response?.data.error.message;
        if (
            errorMessage.includes('Only valid bearer authentication supported')
        ) {
            thunkApi.dispatch(authorizeAsync());
        }
    }
);
