import { CHANGE_VISITED } from '../actions/actionTypes';

const lastVisited = (state = 0, action) => {
  if (action.type === CHANGE_VISITED) return action.payload;
  return state;
};

export default lastVisited;
