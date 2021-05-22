import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios, { AxiosError } from 'axios';
import {
    AppState,
    Personalization,
    PersonalizationTerm,
    PersonalizationTypes,
    Term,
} from '../state/appState';
import { handleAxiosError } from './requestMiddlewareSlice';

export const personalizationBaseUrl = 'https://api.spotify.com/v1/me/top';

const initialState: Personalization = {
    [PersonalizationTypes.tracks]: {
        type: PersonalizationTypes.tracks,
        [Term.short_term]: { items: [] },
        [Term.medium_term]: { items: [] },
        [Term.long_term]: { items: [] },
    },
    [PersonalizationTypes.artists]: {
        type: PersonalizationTypes.artists,
        [Term.short_term]: { items: [] },
        [Term.medium_term]: { items: [] },
        [Term.long_term]: { items: [] },
    },
};

export const getTopPersonalization = createAsyncThunk(
    'personalization/getTopPersonalization',
    async (
        { token, type }: { token: string; type: PersonalizationTypes },
        thunkApi
    ) => {
        const typeAsString = PersonalizationTypes[type];
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const shortTermResponse = await Axios.get(
            `${personalizationBaseUrl}/${typeAsString}?time_range=short_term`,
            config
        ).catch((axiosError: AxiosError) => {
            thunkApi.dispatch(handleAxiosError(axiosError));
        });
        const medTermResponse = await Axios.get(
            `${personalizationBaseUrl}/${typeAsString}?time_range=medium_term`,
            config
        ).catch((axiosError: AxiosError) => {
            thunkApi.dispatch(handleAxiosError(axiosError));
        });
        const longTermResponse = await Axios.get(
            `${personalizationBaseUrl}/${typeAsString}?time_range=long_term`,
            config
        ).catch((axiosError: AxiosError) => {
            thunkApi.dispatch(handleAxiosError(axiosError));
        });

        const personalization: PersonalizationTerm = {
            type: type,
            [Term.short_term]: shortTermResponse ? shortTermResponse.data : [],
            [Term.medium_term]: medTermResponse ? medTermResponse.data : [],
            [Term.long_term]: longTermResponse ? longTermResponse?.data : [],
        };

        return personalization;
    }
);

export const personalizationSlice = createSlice({
    name: 'personalization',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopPersonalization.fulfilled, (state, action) => {
            if (action.payload.type == PersonalizationTypes.artists) {
                state[PersonalizationTypes.artists] = action.payload;
            } else if (action.payload.type == PersonalizationTypes.tracks) {
                state[PersonalizationTypes.tracks] = action.payload;
            } else {
                console.error('PersonalizationType not found');
            }
        });
        builder.addCase(getTopPersonalization.rejected, (state, action) => {
            console.log('action: ', action);
        });
    },
});

export const selectPersonalization = (type: PersonalizationTypes) => (
    state: AppState
): PersonalizationTerm => {
    return state.personalization[type];
};

export default personalizationSlice.reducer;
