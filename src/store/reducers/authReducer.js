const initialState = {
    userProfile: null,
    error: null,
};
  
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                userProfile: action.payload,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                userProfile: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;