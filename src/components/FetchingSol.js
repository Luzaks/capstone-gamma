import React from 'react';

const FetchingSol = ({setSol, sol}) => {
  return (
    <React.Fragment>
      <label htmlFor="sol">Sol:</label>
      <input type="number" id="sol" name="sol" min="0" max="1000"
             value={ sol }
             onChange={
               (ev) => {
                 setSol(ev.target.value);
               }
             }/>
        </React.Fragment>
    );
};

export default FetchingSol;