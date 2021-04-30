import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { AppState } from '../state/appState';

const initialState = {
    items: [],
};

export const getTopTracks = createAsyncThunk(
    'tracks/getTopTracks',
    async (token: string) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await Axios.get(
            'https://api.spotify.com/v1/me/top/tracks',
            config
        );
        return response?.data;
    }
);

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopTracks.fulfilled, (state, action) => {
            state.items = action.payload.items;
        });
    },
});

export const selectTracks = (state: AppState) => {
    console.log('state.tracks.items: ', state.tracks.items);
    return state.tracks.items;
};

export default tracksSlice.reducer;
