import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { visitedCreator } from '../Redux/actions/actions';
import itemHelper from '../components/helpers/itemHelper';

const mapStateToProps = state => ({ photo: state.photo, lastVisited: state.lastVisited });

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
    const { lastVisited } = this.props;

    return (
      <div className="item-container d-flex flex-column align-items-center justify-content-center">
        { itemHelper(lastVisited, photo) }
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
