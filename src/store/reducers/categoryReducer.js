const initialState = {
    categoryID: "1",
};
  
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return {
                ...state,
                categoryID: action.payload,
            };
        default:
            return state;
    }
};
  
export default categoryReducer;