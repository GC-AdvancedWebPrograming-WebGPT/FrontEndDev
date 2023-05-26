export const CATEGORY_CHANGE = 'CATEGORY_CHANGE';
export const CONDITION_CHANGE = 'CONDITION_CHANGE';

export const categoryChange = (categoryID) => ({
    type: CATEGORY_CHANGE,
    payload: categoryID,
});

export const conditionChange = (conditionID) => ({
    type: CONDITION_CHANGE,
    payload: conditionID,
});