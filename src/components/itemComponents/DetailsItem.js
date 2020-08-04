import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DetailsItem = ({
  sol, earthDate, fullName, camName, rover, id, imgSrc, addVis,
}) => (
  <div className="item-info-container d-flex">
    <div className="left item-description d-flex flex-column align-items-center justify-content-center">
      <nav className="item-nav-bar">
        <ul>
          <Link
            to={{ pathname: '/' }}
            onClick={() => addVis(id)}
          >
            <li> ← go back</li>
          </Link>
        </ul>
      </nav>
      <div className="items-detail-container d-flex flex-column align-items-center justify-content-center">
        <ul className="details-ul d-flex justify-content-center align-items-end">
          <li className="item-details-elem">
            <p className="details">DETAILS</p>
          </li>
        </ul>
        <div className="item-details-ul-container d-flex justify-content-end">
          <ul className="item-details-ul d-flex flex-column justify-content-start align-items-start">
            <li className="item-details-li details-info">
              Photo
              {' '}
              {id}
            </li>
            <li className="item-details-li details-info">
              taken at sol
              (martian day)
              {' '}
              {sol}
            </li>
            <li className="item-details-li details-info">
              {earthDate}
              {' '}
              on Earth
            </li>
            <li className="item-details-li details-info">
              by
              {' '}
              {fullName}
              {' '}
              (
              {camName}
              )
            </li>
          </ul>
        </div>
        <ul className="rover-introduction-ul d-flex align-items-center justify-content-end">
          <li className="item-details-elem">
            <p className="rover-intro">LAND ROVER</p>
            <p className="rover-name">{rover.name}</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="right item-photo d-flex flex-column align-items-center justify-content-center">
      <img src={imgSrc} alt={id} />
    </div>
  </div>
);

DetailsItem.propTypes = {
  rover: PropTypes.objectOf(PropTypes.any).isRequired,
  sol: PropTypes.number.isRequired,
  earthDate: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  camName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  addVis: PropTypes.func.isRequired,
};

export default DetailsItem;
