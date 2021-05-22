export const initialAuthState = {
    token: '',
    authorized: false,
    status: 'idle',
};

// Auth
export type AuthState = {
    token: string;
    verifier: string;
};

// Personalization (Top Tracks and Artists)
export enum Term {
    short_term,
    medium_term,
    long_term,
}

export enum PersonalizationTypes {
    tracks,
    artists,
}

export type Media = {
    name: string;
    id: string;
};

export type PersonalizationTerm = {
    type: PersonalizationTypes;
    [Term.short_term]: { items: Media[] };
    [Term.medium_term]: { items: Media[] };
    [Term.long_term]: { items: Media[] };
};

export type Personalization = {
    [PersonalizationTypes.tracks]: PersonalizationTerm;
    [PersonalizationTypes.artists]: PersonalizationTerm;
};

// User
export type User = {
    userId: string;
};

export type AppState = {
    auth: AuthState;
    personalization: Personalization;
    user: User;
};
