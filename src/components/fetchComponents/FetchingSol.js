import React from 'react';
import PropTypes from 'prop-types';

const FetchingSol = ({ setSol }) => (
  <>
    <input
      className="filter-sol"
      type="number"
      id="sol"
      name="sol"
      min="1"
      max="1000"
      placeholder="Choose a day"
      onChange={
               ev => {
                 setSol(ev.target.value);
               }
             }
    />
  </>
);

FetchingSol.propTypes = {
  setSol: PropTypes.func.isRequired,
};

export default FetchingSol;
