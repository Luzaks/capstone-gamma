import { combineReducers } from 'redux';
import rover from './roverReducer';
import filter from './filterReducer';
import cameras from './camerasReducer';

const rootReducer = combineReducers({
  rover,
  filter,
  cameras
});

export default rootReducer;