import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { visitedCreator } from '../../Redux/actions/actions';

const mapStateToProps = state => ({ photo: state.photo });

function mapDispatchToProps(dispatch) {
  return {
    addVisitedId: imgId => dispatch(visitedCreator(imgId)),
  };
}

// eslint-disable-next-line react/prefer-stateless-function
class Item extends Component {
  render() {
    const { photo } = this.props;
    const { addVisitedId } = this.props;
    addVisitedId(photo.id);
    return (
      <div className="item-container d-flex flex-column">
        <div className="item-info-container d-flex">
          <div className="left item-description d-flex flex-column align-items-center justify-content-center">
            <nav className="item-nav-bar">
              <ul>
                <Link to={{ pathname: '/' }}>
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
                    {photo.id}
                  </li>
                  <li className="item-details-li details-info">
                    taken at sol
                    (martian day)
                    {' '}
                    {photo.sol}
                  </li>
                  <li className="item-details-li details-info">
                    {photo.earth_date}
                    {' '}
                    on Earth
                  </li>
                  <li className="item-details-li details-info">
                    by
                    {' '}
                    {photo.camera.full_name}
                    {' '}
                    (
                    {photo.camera.name}
                    )
                  </li>
                </ul>
              </div>
              <ul className="rover-introduction-ul d-flex align-items-center justify-content-end">
                <li className="item-details-elem">
                  <p className="rover-intro">LAND ROVER</p>
                  <p className="rover-name">{photo.rover.name}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="right item-photo d-flex flex-column align-items-center justify-content-center">
            <img src={photo.img_src} alt={photo.id} />
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  photo: PropTypes.objectOf(PropTypes.any).isRequired,
  addVisitedId: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
