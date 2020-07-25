import React from 'react';
import PropTypes from 'prop-types';
import { photosCreator } from '../../Redux/actions/actions';
import { Link } from 'react-router-dom';

const LinkPhoto = ({ img, dispatch }) => {
  return (
     <div className="photo-hover-layer">
       <Link to={{pathname: `/item/${img.id}`}}
             onClick={() => {
               dispatch(photosCreator(img))
               }
             }>
             <p className="photo-hover-link">
               See details
             </p>
       </Link>
     </div>
    );
};

LinkPhoto.propTypes = {
    img: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default LinkPhoto;