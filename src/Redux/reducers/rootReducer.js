import { combineReducers } from 'redux';
import photos from './photosReducer';

const rootReducer = combineReducers({
  photos
});

export default rootReducer;