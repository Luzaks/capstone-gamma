import React from 'react';
import fetch_api from '../Redux/actions/actions';

const SubmitButton = ({ rover, uiHelper, dispatch, sol }) => {
  return (
    <button className="btn btn-primary mt-3"
            onClick={
              () => {
                uiHelper(rover);
                dispatch(fetch_api(rover,sol));
              }
            }>
      Submit
    </button>
    );
};

export default SubmitButton;