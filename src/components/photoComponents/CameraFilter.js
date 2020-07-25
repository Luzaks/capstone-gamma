import React from 'react';
import PropTypes from 'prop-types';
import {filterCreator} from '../../Redux/actions/actions';

const CameraFilter = ({ dispatch, cameras }) => {
  return (
    <div>
      <select className="filter-selector" name="Cams"
              onChange={
                (ev) => {
                  dispatch(filterCreator(ev.target.value));
                }
              }>
              <option value="Cameras" selected disabled hidden > CAMERA </option>
              { cameras.map(camera => <option key={camera} value={camera}>{camera}</option>)}
          </select>
      </div>
  );
};

CameraFilter.ppropTypes = {
    dispatch: PropTypes.func.isRequired,
    cameras: PropTypes.array.isRequired
};

export default CameraFilter;