import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import conditionReducer from './conditionReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  condition: conditionReducer,
});

export default rootReducer;