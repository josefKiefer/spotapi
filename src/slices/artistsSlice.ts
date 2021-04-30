import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { AppState, Artist, ArtistTerm, Term } from '../state/appState';

const initialState: ArtistTerm = {
    [Term.short_term]: { items: [] },
    [Term.medium_term]: { items: [] },
    [Term.long_term]: { items: [] },
};

export const getTopArtists = createAsyncThunk(
    'artists/getTopArtists',
    async (token: string) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const shortTermResponse = await Axios.get(
            'https://api.spotify.com/v1/me/top/artists?time_range=short_term',
            config
        );
        const medTermResponse = await Axios.get(
            'https://api.spotify.com/v1/me/top/artists?time_range=medium_term',
            config
        );
        const longTermResponse = await Axios.get(
            'https://api.spotify.com/v1/me/top/artists?time_range=long_term',
            config
        );

        const artists: ArtistTerm = {
            [Term.short_term]: shortTermResponse?.data,
            [Term.medium_term]: medTermResponse?.data,
            [Term.long_term]: longTermResponse?.data,
        };

        console.log(artists);

        return artists;
    }
);

export const artistsSlice = createSlice({
    name: 'artists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopArtists.fulfilled, (state, action) => {
            console.log('action.payload', action.payload);
            state[0] = action.payload[0];
            state[1] = action.payload[1];
            state[2] = action.payload[2];
        });
    },
});

export const selectArtists = (state: AppState): ArtistTerm => {
    return state.artists;
};

export default artistsSlice.reducer;
