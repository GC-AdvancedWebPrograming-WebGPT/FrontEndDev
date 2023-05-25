const initialState = {
    categoryID: 0,
    conditionID: 0,
};

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORY_CHANGE':
            return{
                ...state,
                categoryID: 1,
                conditionID: 0,
            };
        case 'CONDITION_CHANGE':
            return{
                ...state,
                categoryID: 0,
                conditionID: 1,
            }
        default:
            return state;
    }
};

export default CategoryReducer;