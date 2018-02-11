import { combineReducers } from 'redux';
import CategoryDataReducer from './CategoryDataReducer';
import NavReducer from './NavReducer';

const rootReducer = combineReducers({
  categoryData: CategoryDataReducer,
  nav: NavReducer,
});

export default rootReducer;
