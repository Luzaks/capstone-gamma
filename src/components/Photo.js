import React from 'react';
import {Img} from "../styles/StyledComponents";

const Photo = ({ item, rover }) => {
    return (
        <Img src={item.img_src} alt={`rover-${rover.rover_name}`} />
    );
};

export default Photo;