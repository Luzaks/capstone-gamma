import Axios from 'axios';
import {
  CHANGE_VISITED,
  CHANGE_PHOTO,
  CHANGE_FILTER,
  CHANGE_CAMERAS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from './actionTypes';

function visitedCreator(imgId) {
  return {
    type: CHANGE_VISITED,
    payload: imgId,
  };
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
    payload: imgObject,
  };
}

function filterCreator(filter) {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
}

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = (rover, photos, sol) => ({
  type: FETCH_SUCCESS,
  payload: {
    rover_name: rover,
    photos,
    sol,
  },
});

const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: error,
});

const fetchApi = (rover, sol) => {
  const APIkey = '0DQdoReiu09VZ7KRIb07wks4D7xiFNqWC6jZk4ip';
  return dispatch => {
    dispatch(fetchRequest());
    Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${APIkey}`)
      .then(r => {
        dispatch(fetchSuccess(rover, r.data.photos, sol));
      })
      .catch(() => {
        dispatch(fetchFailure('Ups. Something went wrong.'));
      });
  };
};

export {
  visitedCreator,
  photosCreator,
  camerasCreator,
  filterCreator,
  fetchRequest,
  fetchSuccess,
  fetchFailure,
};

export default fetchApi;
