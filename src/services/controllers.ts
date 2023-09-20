/* eslint-disable @typescript-eslint/no-non-null-assertion */
const baseUrl = process.env.REACT_APP_API_URL!;

// #region AuthenticationController
export const authenticationController = {
  signIn: () => `${baseUrl}/Authentication/Login`,
  signUp: () => `${baseUrl}/Authentication/Register`,
};
// #endregion
