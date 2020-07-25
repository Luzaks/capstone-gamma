import React from 'react';
import PropTypes from 'prop-types';

const FetchingRover = ( { setRover, rovers }  ) => {
  return (
    <select className="filter-rover" name="filter"
            onChange={
              (ev) => {
                setRover(ev.target.value);
              }
            }>
      <option value="Rovers" selected disabled hidden>Rovers</option>
        {
          rovers.map(rover =>
            <option key={rover} value={rover}>
              {rover}
            </option>)
        }
    </select>
  );
};

FetchingRover.propTypes = {
  setRover: PropTypes.func.isRequired,
  rovers: PropTypes.array.isRequired
};

export default FetchingRover;