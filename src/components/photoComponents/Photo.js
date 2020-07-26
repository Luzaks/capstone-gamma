import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImgContainer, Img } from '../../styles/StyledComponents';
import LinkPhoto from './LinkPhoto';
import { Link } from 'react-router-dom';
import {photosCreator} from '../../Redux/actions/actions';
import {PhotoContainer} from '../../styles/StyledComponents';

const Photo = ({ item, rover, dispatch }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <PhotoContainer className="photo-container">
      <Link to={{pathname: `/item/${item.id}`}}
              onClick={() => {
                  dispatch(photosCreator(item))
                }
              }>
        <ImgContainer onMouseOver={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}>
          <Img className="photo-item" src={item.img_src} alt={`rover-${rover.id}`} />
          { isHovered && ( <LinkPhoto /> ) }
        </ImgContainer>
      </Link>
        <p className="photo-id-text">{item.id}</p>
    </PhotoContainer>
  );
};

Photo.propTypes = {
  item: PropTypes.object.isRequired,
  rover: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Photo;
