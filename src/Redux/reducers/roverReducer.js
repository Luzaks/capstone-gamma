import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from '../actions/actionTypes';

const rover = (state = [], action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        rover_name: action.payload.rover_name,
        loading: false,
        photos: action.payload.photos,
        sol: action.payload.sol,
        error: '',
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        photos: [],
        error: action.payload,
      };
    default: return state;
  }
};

export default rover;
