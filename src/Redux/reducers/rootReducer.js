import { combineReducers } from 'redux';
import rover from './roverReducer';
import filter from './filterReducer';
import cameras from './camerasReducer';
import photo from './photosReducer';
import lastVisited from './visitedReducer';

const rootReducer = combineReducers({
  rover,
  filter,
  cameras,
  photo,
  lastVisited,
});

export default rootReducer;
