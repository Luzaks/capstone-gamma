import React from 'react';

const FetchingRover = ( {setRover, rovers }  ) => {
  return (
    <select className="filter-selector" name="filter"
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

export default FetchingRover;