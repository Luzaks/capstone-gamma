import React from 'react';
import PropTypes from 'prop-types';
import { filterCreator } from '../../Redux/actions/actions';
import UiHelper from '../helpers/uiHelper';

const CameraFilter = ({ dispatch, cameras, filterState }) => (
  <div>
    <select
      className="filter-selector"
      name="Cams"
      onChange={
                ev => {
                  dispatch(filterCreator(ev.target.value));
                }
              }
    >
      { cameras.map(camera => UiHelper(camera, filterState)) }
    </select>
  </div>
);

CameraFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cameras: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterState: PropTypes.string.isRequired,
};

export default CameraFilter;
