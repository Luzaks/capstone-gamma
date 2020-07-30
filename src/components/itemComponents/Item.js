/* eslint-disable camelcase, react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { visitedCreator } from '../../Redux/actions/actions';
import DetailsItem from './DetailsItem';
import UndefinedError from './UndefinedError';

const mapStateToProps = state => ({ photo: state.photo, lastVisited: state.lastVisited });

function mapDispatchToProps(dispatch) {
  return {
    addVisitedId: imgId => dispatch(visitedCreator(imgId)),
  };
}

class Item extends Component {
  render() {
    const { photo } = this.props;
    const {
      sol, earth_date, camera, rover, img_src,
    } = photo;
    const { full_name, name } = camera;
    const { addVisitedId } = this.props;
    addVisitedId(photo.id);
    const { lastVisited } = this.props;

    const itemHelper = (lastVisited, camera) => {
      if (lastVisited === undefined && camera === undefined) return <UndefinedError />;
      return (
        <DetailsItem
          id={photo.id}
          imgSrc={img_src}
          fullName={full_name}
          camName={name}
          sol={sol}
          earthDate={earth_date}
          rover={rover}
        />
      );
    };
    return (
      <div className="item-container d-flex flex-column align-items-center justify-content-center">
        {itemHelper(lastVisited, camera)}
      </div>
    );
  }
}

Item.propTypes = {
  photo: PropTypes.objectOf(PropTypes.any).isRequired,
  addVisitedId: PropTypes.func.isRequired,
  lastVisited: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

/* eslint-enable camelcase, react/prefer-stateless-function */
