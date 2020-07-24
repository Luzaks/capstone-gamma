import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import styled from 'styled-components';


const Card = styled.div`
  border: 1px solid blue;
  width: 100%;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  margin: 20px;
`;

const PhotosList = () => {

  const rover = useSelector(state => state.rover);

  return (
    <Card>
      {
        rover.photos.map(item => <Img src={item.img_src} alt={`rover-${rover.rover_name}`} />)
      }
    </Card>
  );
};

export default PhotosList;