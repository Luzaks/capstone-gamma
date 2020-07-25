import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({ photo: state });

class Item extends Component {
    render() {
        const { photo } = this.props;
        return (
            <div className="item-container d-flex flex-column">
                <nav className="item-nav-bar">
                    <ul>
                        <Link to={{pathname: '/'}}>
                            <li>Go back</li>
                        </Link>
                    </ul>
                </nav>
                <div className="item-info-container d-flex">
                    <div className="left item-description d-flex align-items-center justify-content-center">
                        left
                    </div>
                    <div className="right item-photo d-flex align-items-center justify-content-center">
                        right
                    </div>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    photo: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Item);