import {
  CHANGE_VISITED,
  CHANGE_PHOTO,
  CHANGE_FILTER,
  CHANGE_CAMERAS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS
} from './actionTypes';
import Axios from 'axios';

function visitedCreator(imgId) {
  return {
    type: CHANGE_VISITED,
    payload: imgId
  }
}

function camerasCreator(cams) {
  return {
    type: CHANGE_CAMERAS,
    payload: cams,
  };
}

function photosCreator(imgObject) {
  return {
    type: CHANGE_PHOTO,
    payload: imgObject
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

const fetch_api = (rover, sol) => {

 const APIkey = '0DQdoReiu09VZ7KRIb07wks4D7xiFNqWC6jZk4ip';
 return (dispatch) => {
   dispatch(fetch_request());
   Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${APIkey}`)
     .then((r) => {
       dispatch(fetch_success( rover, r.data.photos, sol))
     })
     .catch(onerror => {
       dispatch(fetch_failure('Ups. Something went wrong.'))
     }
   );
  }
};

export {
  visitedCreator,
  photosCreator,
  camerasCreator,
  filterCreator,
  fetch_request,
  fetch_success,
  fetch_failure,
}

export default fetch_api;
