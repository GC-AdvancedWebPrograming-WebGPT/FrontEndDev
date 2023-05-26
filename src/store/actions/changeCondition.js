export const changeCondition = (conditionID) => {
    return {
        type: 'CHANGE_CONDITION',
        payload: conditionID,
    };
};