import { combineReducers } from 'redux';
import rover from './roverReducer';
import filter from './filterReducer';

const rootReducer = combineReducers({
  rover,
  filter
});

export default rootReducer;