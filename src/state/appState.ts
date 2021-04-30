export const initialAuthState = {
    token: '',
    authorized: false,
    status: 'idle',
};

export type AuthState = {
    token: string;
    verifier: string;
};

export type Track = {
    name: string;
};

export type TracksState = {
    items: Track[];
};

export type Artist = {
    name: string;
};

export type Artists = {
    items: Artist[];
};

export type ArtistTerm = Record<Term, Artists>;

export enum Term {
    short_term,
    medium_term,
    long_term,
}

export type AppState = {
    auth: AuthState;
    tracks: TracksState;
    artists: ArtistTerm;
};
