import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { AppState } from '../state/appState';
import { handleAxiosError } from './requestMiddlewareSlice';

const initialState = {
    status: 'idle',
    userId: '',
};
export const getUser = createAsyncThunk(
    'user/get',
    async (
        {
            token,
        }: {
            token: string;
        },
        thunkApi
    ) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
        const response: AxiosResponse | void = await axios
            .get('https://api.spotify.com/v1/me', config)
            .catch((axiosError: AxiosError) => {
                thunkApi.dispatch(handleAxiosError(axiosError));
            });

        if (response) {
            return response?.data;
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userId = action.payload.id;
            });
    },
});

export const selectUserId = (state: AppState): string => state.user.userId;

export default userSlice.reducer;
