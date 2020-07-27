import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ImgContainer, Img, PhotoContainer } from '../../styles/StyledComponents';
import LinkPhoto from './LinkPhoto';
import { photosCreator } from '../../Redux/actions/actions';

const Photo = ({ item, dispatch }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <PhotoContainer className="photo-container">
      <Link
        to={{ pathname: `/item/${item.id}` }}
        onClick={() => {
          dispatch(photosCreator(item));
        }}
      >
        <ImgContainer
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
        >
          <Img className="photo-item" src={item.img_src} alt={`photo-${item.id}`} />
          { isHovered && (<LinkPhoto />) }
        </ImgContainer>
      </Link>
      <p className="photo-id-text">{item.id}</p>
    </PhotoContainer>
  );
};

Photo.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Photo;
