export const SIGN_IN = "SIGN_IN";

export const storeTokens = (accessToken, refreshToken) => ({
  type: SIGN_IN,
  payload: {
    accessToken,
    refreshToken
  }
});
