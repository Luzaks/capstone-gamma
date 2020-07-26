import { CHANGE_VISITED } from '../actions/actionTypes';

const last_visited = (state = 'ALL', action) => {
    if (action.type === CHANGE_VISITED) return action.payload;
    else return state
};

export default last_visited;