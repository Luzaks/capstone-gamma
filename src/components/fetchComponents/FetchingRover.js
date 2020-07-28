import React from 'react';
import PropTypes from 'prop-types';

const FetchingRover = ({ roverState, setRover, rovers }) => (
  <>
    <select
      className="filter-rover"
      name="filter"
      id="rover"
      placeholder={roverState}
      onChange={
                ev => {
                  setRover(ev.target.value);
                }
              }
    >
      <option selected disabled hidden>CHOOSE A ROVER</option>
      {
            rovers.map(rover => (
              <option key={rover} value={rover}>
                {rover}
              </option>
            ))
          }
    </select>
  </>
);

FetchingRover.propTypes = {
  setRover: PropTypes.func.isRequired,
  rovers: PropTypes.arrayOf(PropTypes.string).isRequired,
  roverState: PropTypes.string.isRequired,
};

export default FetchingRover;
