import React from 'react';
import PropTypes from 'prop-types';

const FetchingRover = ( { roverState, setRover, rovers }  ) => {

  const roverUiHelper = (rover) => {
    const selected = (
      <option key={rover} value={rover} selected >
        {rover}
      </option> );
    const normal = (
      <option key={rover} value={rover} >
        {rover}
      </option>
    );
    if ((rover === roverState) && (roverState !== '')) return selected;
    else return normal;
  };
  return (
    <select className="filter-rover" name="filter"
            onChange={
              (ev) => {
                setRover(ev.target.value);
              }
            }>
      <option value="Rovers" selected disabled hidden />
        {
          rovers.map(rover => roverUiHelper(rover) )
        }
    </select>
  );
};

FetchingRover.propTypes = {
  setRover: PropTypes.func.isRequired,
  rovers: PropTypes.array.isRequired
};

export default FetchingRover;