import React from 'react';
import PropTypes from 'prop-types';

const DetailsItemMock = ({
  sol, earthDate, fullName, camName, rover, id, imgSrc,
}) => (
  <div className="item-info-container d-flex">
    <p>
      {sol}
      {' '}
      {earthDate}
      {' '}
      {fullName}
      {' '}
      {camName}
      {' '}
      {rover}
      {' '}
      {id}
      {' '}
      {imgSrc}
    </p>
  </div>
);

DetailsItemMock.propTypes = {
  rover: PropTypes.objectOf(PropTypes.any).isRequired,
  sol: PropTypes.number.isRequired,
  earthDate: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  camName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default DetailsItemMock;
