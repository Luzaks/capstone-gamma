import { CHANGE_CAMERAS } from '../actions/actionTypes';

const cameras = (state = [], action) => {
  if (action.type === CHANGE_CAMERAS) return action.payload;
  return state;
};

export default cameras;
