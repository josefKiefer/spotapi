import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { exchangeAuthCodeForToken, redirect } from '../helpers/auth/authorize';
import { AppState } from '../state/appState';

const initialState = {
    token: '',
    status: 'idle',
};

export const authorizeAsync = createAsyncThunk('auth/authorize', async () => {
    const verifier = await redirect();
    return verifier;
});

export const getToken = createAsyncThunk('auth/getToken', async () => {
    const response = await exchangeAuthCodeForToken();
    return response?.data;
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(authorizeAsync.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(authorizeAsync.fulfilled, (state) => {
                state.status = 'idle';
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.token = action.payload.access_token;
            });
    },
});

export const selectVerifier = (state: AppState): string => state.auth.verifier;
export const selectToken = (state: AppState): string => state.auth.token;

export default authSlice.reducer;
