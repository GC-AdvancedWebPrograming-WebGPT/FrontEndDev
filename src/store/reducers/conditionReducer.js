const initialState = {
    conditionID: "1",
};
  
const conditionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_CONDITION':
            return {
                ...state,
                conditionID: action.payload,
            };
        default:
            return state;
    }
};
  
export default conditionReducer;