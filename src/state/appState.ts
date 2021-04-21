export const initialAuthState = {
  token: '',
  authorized: false,
  status: 'idle'
};

export type AuthState = {
  token: string;
  verifier: string;
}

export type AppState = {
  auth: AuthState
};