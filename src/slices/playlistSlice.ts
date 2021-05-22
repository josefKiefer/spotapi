import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { handleAxiosError } from './requestMiddlewareSlice';
import formatTrackUrisForPlaylistCreate from '../helpers/formatters';
import { AppState } from '../state/appState';

const initialState = {
    status: 'idle',
    playlistId: '',
    playlistName: '',
};
export const createPlaylist = createAsyncThunk(
    'playlist/create',
    async (
        {
            trackUris,
            playlistName,
        }: {
            trackUris: string[];
            playlistName: string;
        },
        thunkApi
    ) => {
        const state = thunkApi.getState() as AppState;
        const config = {
            headers: {
                Authorization: `Bearer ${state.auth.token}`,
                'Content-Type': 'application/json',
            },
        };
        const playlistResponse: AxiosResponse | void = await axios
            .post(
                `https://api.spotify.com/v1/users/${state.user.userId}/playlists`,
                {
                    name: playlistName,
                    description: 'Your custom playlist created by Spotapi',
                },
                config
            )
            .catch((axiosError: AxiosError) => {
                thunkApi.dispatch(handleAxiosError(axiosError));
            });

        if (!playlistResponse) return;

        const uris = formatTrackUrisForPlaylistCreate(trackUris);
        await axios.post(
            `https://api.spotify.com/v1/playlists/${playlistResponse?.data.id}/tracks`,
            {
                uris,
            },
            config
        );
    }
);

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPlaylist.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(createPlaylist.fulfilled, (state) => {
                state.status = 'idle';
            });
    },
});

export default playlistSlice.reducer;
