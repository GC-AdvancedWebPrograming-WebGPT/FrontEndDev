import { combineReducers } from 'redux';
import authReducer from './authReducer';
import CategoryReducer from './CategoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: CategoryReducer,
});

export default rootReducer;