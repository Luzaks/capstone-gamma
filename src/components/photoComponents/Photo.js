import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImgContainer, Img } from '../../styles/StyledComponents';
import LinkPhoto from './LinkPhoto';

const Photo = ({ item, rover, dispatch }) => {
    const [isHovered, setHover] = useState(false);
    return (
      <ImgContainer onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
        <Img className="photo-item" src={item.img_src} alt={`rover-${rover.rover_name}`} />
        { isHovered && ( <LinkPhoto img={item} dispatch={dispatch} /> ) }
      </ImgContainer>
    );
};

Photo.propTypes = {
    item: PropTypes.object.isRequired,
    rover: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Photo;
