import React from 'react';

const UiHelper = (object, state) => {
  const selected = (
    <option key={object} selected value={object} >
      {object}
    </option> );
    const normal = (
      <option key={object} value={object} >
        {object}
      </option>
    );
    if ((object === state) && (state !== '')) return selected;
    else return normal;
};

export default UiHelper;
