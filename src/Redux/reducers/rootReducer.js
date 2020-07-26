import { combineReducers } from 'redux';
import rover from './roverReducer';
import filter from './filterReducer';
import cameras from './camerasReducer';
import photo from './photosReducer';
import last_visited from './visitedReducer';

const rootReducer = combineReducers({
  rover,
  filter,
  cameras,
  photo,
  last_visited
});

export default rootReducer;