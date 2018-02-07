import { combineReducers } from 'redux';
import NavReducer from './NavReducer';

const rootReducer = combineReducers({
  nav: NavReducer,
});

export default rootReducer;
