import React from 'react';
import PropTypes from 'prop-types';
import UiHelper from '../helpers/uiHelper';

const FetchingRover = ( { roverState, setRover, rovers }  ) => {

  return (
    <select className="filter-rover" name="filter"
            onChange={
              (ev) => {
                setRover(ev.target.value);
              }
            }>
      <option value="Rovers" selected disabled hidden />
        {
          rovers.map(rover => UiHelper(rover, roverState) )
        }
    </select>
  );
};

FetchingRover.propTypes = {
  setRover: PropTypes.func.isRequired,
  rovers: PropTypes.array.isRequired
};

export default FetchingRover;