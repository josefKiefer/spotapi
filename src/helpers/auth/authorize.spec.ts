import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { exchangeAuthCodeForToken, redirect } from './authorize';

describe('#redirect', () => {
    it('redirects and returns the code verifier', async () => {
        // Arrange
        const mockVerifier = new Uint32Array(10);
        const mockGetRandomValues = jest.fn().mockReturnValueOnce(mockVerifier);
        const mockDigest = jest.fn().mockReturnValueOnce(new ArrayBuffer(1));
        Object.defineProperty(window, 'crypto', {
            value: {
                getRandomValues: mockGetRandomValues,
                subtle: { digest: mockDigest },
            },
        });
        if (typeof TextEncoder === 'undefined') {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const { TextEncoder } = require('util');
            global.TextEncoder = TextEncoder;
        }

        // Act
        const result = await redirect();

        // Assert
        expect(result).toBeTruthy();
        expect(mockGetRandomValues).toBeCalledTimes(1);
        expect(mockDigest).toBeCalledTimes(1);
        expect(document.cookie).toContain('spotapi-verifier=');
    });
});

describe('#exchangeAuthCodeForToken', () => {
    it('returns if spotapi-verifier cookie is null', async () => {
        // Arrange
        Object.defineProperty(document, 'cookie', {
            value: '',
            configurable: true,
        });

        // Act
        const result = await exchangeAuthCodeForToken();

        // Assert
        expect(result).toBeFalsy();
    });

    it('calls spotify token endpoint and returns the response', async () => {
        // Arrange
        Object.defineProperty(document, 'cookie', {
            value: 'spotapi-verifier=12345',
            configurable: true,
        });
        const mockResponse: AxiosResponse = {
            data: {},
            status: 200,
            statusText: 'success',
            headers: {},
            config: {},
        };

        jest.spyOn(axios, 'post').mockResolvedValueOnce(mockResponse);
        // Act
        const result = await exchangeAuthCodeForToken();
        // Assert
        expect(result).toEqual(mockResponse);
    });
});
