import React from 'react';
import filterPhotosHelper from '../../../components/helpers/filterPhotosHelper';

const photoListMock = (filterState, roverState) => {
  const message = 'Photo:';
  return filterPhotosHelper(filterState, roverState).map(item => (
    <p key={item.id}>
      {message}
      {' '}
      {item.id}
    </p>
  ));
};

export default photoListMock;
