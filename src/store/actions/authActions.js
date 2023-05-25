export const loginSuccess = (userProfile) => {
    return {
      type: 'LOGIN_SUCCESS',
      payload: userProfile,
    };
};
  
export const loginFailure = (error) => {
    return {
      type: 'LOGIN_FAILURE',
      payload: error,
    };
};