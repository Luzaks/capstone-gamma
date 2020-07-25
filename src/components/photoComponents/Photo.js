import React, { useState } from 'react';
import { ImgContainer, Img } from '../../styles/StyledComponents';
import LinkPhoto from './LinkPhoto';

const Photo = ({ item, rover }) => {
    const [isHovered, setHover] = useState(false);
    return (
      <ImgContainer onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>
        <Img className="photo-item" src={item.img_src} alt={`rover-${rover.rover_name}`} />
        { isHovered && ( <LinkPhoto/> ) }
      </ImgContainer>
    );
};

export default Photo;