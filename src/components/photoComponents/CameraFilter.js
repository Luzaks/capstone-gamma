import React from 'react';
import PropTypes from 'prop-types';
import {filterCreator} from '../../Redux/actions/actions';

const CameraFilter = ({ dispatch, cameras, filterState }) => {
    const camUiHelper = (cam) => {
        const selected = (
            <option key={cam} value={cam} selected >
                {cam}
            </option> );
        const normal = (
            <option key={cam} value={cam} >
                {cam}
            </option>
        );
        if ((cam === filterState) && (filterState !== '')) return selected;
        else return normal;
    };
  return (
    <div>
      <select className="filter-selector" name="Cams"
              onChange={
                (ev) => {
                  dispatch(filterCreator(ev.target.value));
                }
              }>
              { cameras.map(camera => camUiHelper(camera)) }
          </select>
      </div>
  );
};

CameraFilter.ppropTypes = {
    dispatch: PropTypes.func.isRequired,
    cameras: PropTypes.array.isRequired
};

export default CameraFilter;