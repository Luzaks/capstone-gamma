import React from 'react';
import PropTypes from 'prop-types';
import {filterCreator} from '../../Redux/actions/actions';
import UiHelper from '../helpers/uiHelper';

const CameraFilter = ({ dispatch, cameras, filterState }) => {

  return (
    <div>
      <select className="filter-selector" name="Cams"
              onChange={
                (ev) => {
                  dispatch(filterCreator(ev.target.value));
                }
              }>
              { cameras.map(camera => UiHelper(camera, filterState)) }
          </select>
      </div>
  );
};

CameraFilter.ppropTypes = {
  dispatch: PropTypes.func.isRequired,
  cameras: PropTypes.array.isRequired
};

export default CameraFilter;