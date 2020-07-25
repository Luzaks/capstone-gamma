import React from 'react';
import PropTypes from 'prop-types';
import fetch_api from '../../Redux/actions/actions';

const SubmitButton = ({ rover, uiHelper, dispatch, sol }) => {
  return (
    <button className="fetch-submit-btn btn btn-primary ml-3"
            onClick={
              () => {
                uiHelper(rover);
                dispatch(fetch_api(rover, sol));
              }
            }>
      See
    </button>
    );
};

SubmitButton.propTypes = {
    rover: PropTypes.string.isRequired,
    uiHelper: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    sol: PropTypes.string.isRequired,
};

export default SubmitButton;