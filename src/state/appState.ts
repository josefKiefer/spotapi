export const initialAuthState = {
  token: '',
  authorized: false,
  status: 'idle'
};

export type AuthState = {
  token: string;
  verifier: string;
}

export type Track = {
  name: string;
}

export type TracksState = {
  items: Track[];
}

export type AppState = {
  auth: AuthState,
  tracks: TracksState
};