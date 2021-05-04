import axios, { AxiosResponse } from 'axios';
import { generateCodeChallengeFromVerifier } from './codeVerifierAndChallenge';

const clientId = 'f572c0f35a1e43ccb9031e3373a2a3db';
const encodedUri = encodeURI(window.location.href.split('?')[0]);

export const redirect = async (): Promise<string> => {
    const {
        codeChallenge,
        verifier,
    } = await generateCodeChallengeFromVerifier();
    document.cookie = `spotapi-verifier=${verifier}`;

    const scope = encodeURIComponent('user-top-read');
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodedUri}&code_challenge_method=S256&code_challenge=${codeChallenge}&scope=${scope}`;

    return verifier;
};

const getCookie = (name: string): string | null => {
    const nameLenPlus = name.length + 1;
    const cookies = document.cookie.split(';').map((c) => c.trim());
    const cookie =
        cookies
            .filter((cookie) => {
                return cookie.substring(0, nameLenPlus) === `${name}=`;
            })
            .map((cookie) => {
                return decodeURIComponent(cookie.substring(nameLenPlus));
            })[0] || null;

    return cookie;
};

export const exchangeAuthCodeForToken = async (): Promise<
    AxiosResponse | undefined
> => {
    const code = window.location.href.split('=')[1];

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', encodedUri);

    const verifier = getCookie('spotapi-verifier');
    if (!verifier) {
        console.log('spotapi-verifier cookie could not be found');
        return;
    }
    params.append('code_verifier', verifier);

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    return await axios.post(
        'https://accounts.spotify.com/api/token',
        params,
        config
    );
};
