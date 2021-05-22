import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import {
    PersonalizationTerm,
    PersonalizationTypes,
    Term,
} from '../state/appState';
import { getTopPersonalization } from './personalizationSlice';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as mockResponse from '../test/mockTopPersonalizationResponse.json';
import { personalizationBaseUrl } from './personalizationSlice';
describe('#getTopPersonalization Async Thunk', () => {
    const persType = PersonalizationTypes.tracks;
    const token = 'token';
    let action: AsyncThunkAction<
        PersonalizationTerm,
        {
            token: string;
            type: PersonalizationTypes;
        },
        {}
    >;
    let dispatch: Dispatch;
    let getState: () => unknown;
    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();

        action = getTopPersonalization({
            token,
            type: persType,
        });
    });

    beforeAll(() => {
        const mock = new MockAdapter(axios);
        mock.onGet(
            `${personalizationBaseUrl}/${PersonalizationTypes[persType]}?time_range=short_term`,
            undefined,
            { Authorization: `Bearer ${token}` }
        ).reply(200, mockResponse);

        mock.onGet(
            `${personalizationBaseUrl}/${PersonalizationTypes[persType]}?time_range=medium_term`,
            undefined,
            { Authorization: `Bearer ${token}` }
        ).reply(200, mockResponse);

        mock.onGet(
            `${personalizationBaseUrl}/${PersonalizationTypes[persType]}?time_range=long_term`,
            undefined,
            { Authorization: `Bearer ${token}` }
        ).reply(200, mockResponse);
    });

    it('should call all 3 top personalization endpoints', async () => {
        const expectedResponse: PersonalizationTerm = {
            type: persType,
            [Term.short_term]: mockResponse,
            [Term.medium_term]: mockResponse,
            [Term.long_term]: mockResponse,
        };
        const actualResponse = await action(dispatch, getState, undefined);
        expect(actualResponse).toBe(expectedResponse);
    });
});
