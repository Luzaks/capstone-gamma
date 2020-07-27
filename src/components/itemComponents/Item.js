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

class Item extends Component {
  render() {
    const { photo } = this.props;
    const { addVisitedId } = this.props;
    addVisitedId(photo.id);
    return (
      <div className="item-container d-flex flex-column">
        {console.log(photo)}
        <div className="item-info-container d-flex">
          <div className="left item-description d-flex flex-column align-items-center justify-content-center">
            <nav className="item-nav-bar">
              <ul>
                <Link to={{ pathname: '/' }}>
                  <li>Go back</li>
                </Link>
              </ul>
            </nav>
            <div className="items-detail-container d-flex flex-column align-items-center justify-content-center">
              <ul className="item-details">
                <li className="item-details-elem">
                  Photo id:
                  {photo.id}
                </li>
                <li className="item-details-elem">
                  Taken by Land Rover
                  {photo.rover.name}
                </li>
                <li className="item-details-elem">
                  At sol
                  {photo.sol}
                  {' '}
                  (
                  {photo.earth_date}
                  )
                  {' '}
                </li>
                <li className="item-details-elem">
                  Camera:
                  {photo.camera.full_name}
                  {' '}
                  (
                  {photo.camera.name}
                  )
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
