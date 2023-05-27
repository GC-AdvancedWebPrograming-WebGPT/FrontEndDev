const initialState = {
    categoryID: 0,
    conditionID: 0,
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORY_CHANGE':
            return{
                ...state,
                categoryID: action.payload,
            };
        case 'CONDITION_CHANGE':
            return{
                ...state,
                conditionID: action.payload,
            }
        default:
            return state;
    }
};

export default CategoryReducer;
