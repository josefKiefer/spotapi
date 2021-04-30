import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { exchangeAuthCodeForToken, redirect } from '../auth/authorize';
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
            .addCase(authorizeAsync.fulfilled, (state, action) => {
                state.status = 'idle';
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.token = action.payload.access_token;
            });
    },
});

export const selectVerifier = (state: AppState) => state.auth.verifier;
export const selectToken = (state: AppState) => state.auth.token;

export default authSlice.reducer;
