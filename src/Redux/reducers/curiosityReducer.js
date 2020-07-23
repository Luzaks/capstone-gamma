import { FETCH_FAILURE,
         FETCH_REQUEST,
         FETCH_SUCCESS } from '../actions/actionTypes';

const curiosity = (state = [], action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_SUCCESS:
            return {
                loading: false,
                photos: action.payload.photos,
                sol: action.payload.sol,
                error: ''
            };
        case FETCH_FAILURE:
            return {
                loading: false,
                photos: [],
                error: action.payload
            };
        default: return state;
    }
};

export default curiosity;