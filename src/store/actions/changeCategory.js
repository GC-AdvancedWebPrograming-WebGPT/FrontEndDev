export const changeCategory = (categoryID) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: categoryID,
    };
};