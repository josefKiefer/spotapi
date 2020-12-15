import { generateCodeChallengeFromVerifier } from './CodeVerifierAndChallenge';

const clientId = 'f572c0f35a1e43ccb9031e3373a2a3db';
const encodedUri = encodeURI('http://localhost:3000');

export const authorize = async () => {
  const codeChallenge = await generateCodeChallengeFromVerifier();

  window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodedUri}&code_challenge_method=S256&code_challenge=${codeChallenge}`;
  
  return;
}