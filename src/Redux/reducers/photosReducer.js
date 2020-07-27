import { CHANGE_PHOTO } from '../actions/actionTypes';

const photo = (state = {}, action) => {
  if (action.type === CHANGE_PHOTO) return action.payload;
  return state;
};

export default photo;
