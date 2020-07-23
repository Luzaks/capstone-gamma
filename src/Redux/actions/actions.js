import {
    FETCH_FAILURE,
    FETCH_REQUEST,
    FETCH_SUCCESS
} from './actionTypes';
import Axios from 'axios';


const fetch_request = () => {
    return {
        type: FETCH_REQUEST
    }
};

const fetch_success = (photos) => {
    return {
        type: FETCH_SUCCESS,
        payload: photos
    }
};

const fetch_failure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
};

const fetch_api = (rover, camera) => {
    return (dispatch) => {
        dispatch(fetch_request());
        Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=${APIkey}`)
            .then((r) => {
                dispatch(fetch_success([r.data]))
            })
            .catch(onerror => {
                dispatch(fetch_failure('Ups.'))
            });
    }
};