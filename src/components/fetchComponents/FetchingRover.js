import React from 'react';
import PropTypes from 'prop-types';

const FetchingRover = ( { roverState, setRover, rovers }  ) => {

  return (
    <React.Fragment>
      <select className="filter-rover"
              name="filter"
              id="rover"
              placeholder={roverState}
              onChange={
                (ev) => {
                  setRover(ev.target.value);
                }
              }>
          <option selected disabled hidden>Choose a rover</option>
          {
            rovers.map(rover =>
              <option key={rover} value={rover} >
                {rover}
              </option>
            )
          }
      </select>
    </React.Fragment>
  );
};

FetchingRover.propTypes = {
  setRover: PropTypes.func.isRequired,
  rovers: PropTypes.array.isRequired
};

export default FetchingRover;
