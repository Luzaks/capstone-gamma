import { combineReducers } from 'redux';
import rover from './roverReducer';
import filter from './filterReducer';
import cameras from './camerasReducer';
import photo from './photosReducer';

const rootReducer = combineReducers({
  rover,
  filter,
  cameras,
  photo
});

export default rootReducer;