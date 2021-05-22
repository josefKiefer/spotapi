const dec2hex = (dec: number) => {
    return ('0' + dec.toString(16)).substr(-2);
};

const generateCodeVerifier = (): string => {
    const array = new Uint32Array(56 / 2);
    window.crypto.getRandomValues(array);
    return Array.from(array, dec2hex).join('');
};

const sha256 = (verifier: string): Promise<ArrayBuffer> => {
    // returns promise ArrayBuffer
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    return window.crypto.subtle.digest('SHA-256', data);
};

const base64urlencode = (arrayBuffer: ArrayBuffer): string => {
    let str = '';
    const bytes = new Uint8Array(arrayBuffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        str += String.fromCharCode(bytes[i]);
    }
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

type pkceData = {
    codeChallenge: string;
    verifier: string;
};
export const generateCodeChallengeFromVerifier = async (): Promise<pkceData> => {
    const verifier = generateCodeVerifier();
    const hashed = await sha256(verifier);
    const codeChallenge = base64urlencode(hashed);
    return { codeChallenge, verifier };
};
