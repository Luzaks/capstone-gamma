import {
  CHANGE_FILTER,
  CHANGE_CAMERAS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS
} from './actionTypes';
import Axios from 'axios';

function camerasCreator(cams) {
  return {
    type: CHANGE_CAMERAS,
    payload: cams,
  };
}

function filterCreator(filter) {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
}

const fetch_request = () => {
  return {
    type: FETCH_REQUEST
  }
};

const fetch_success = (rover, photos, sol) => {
  return {
    type: FETCH_SUCCESS,
    payload: {
      rover_name: rover,
      photos: photos,
      sol: sol
    }
  }
};

const fetch_failure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
};

const fetch_api = (rover = 'spirit', sol = '10') => {

 const APIkey = '0DQdoReiu09VZ7KRIb07wks4D7xiFNqWC6jZk4ip';
 return (dispatch) => {
   dispatch(fetch_request());
   Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${APIkey}`)
     .then((r) => {
       dispatch(fetch_success( rover, r.data.photos, parseInt(sol, 10)))
     })
     .catch(onerror => {
       dispatch(fetch_failure('Ups. Something went wrong.'))
     }
   );
  }
};

export {
  camerasCreator,
  filterCreator,
  fetch_request,
  fetch_success,
  fetch_failure,
}

export default fetch_api;