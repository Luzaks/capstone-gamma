import { CHANGE_FILTER } from '../actions/actionTypes';

const filter = (state = 'all', action) => {
  if (action.type === CHANGE_FILTER) return action.payload
  else return state
};

export default filter;