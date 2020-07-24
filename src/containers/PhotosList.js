import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCreator } from '../Redux/actions/actions';
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

  const dispatch = useDispatch();
  const rover = useSelector(state => state.rover);

  const cameras = ['ALL', 'FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM', 'PANCAM', 'MINITES'];

  return (
    <Card>
      <div>
        <select className="filter-selector" name="Cams" onChange={(ev) => {
          dispatch(filterCreator(ev.target.value));
        }}>
          <option value="Cameras" selected disabled hidden />
          { cameras.map(camera => <option key={camera} value={camera}>{camera}</option>)}
        </select>
      </div>
      <Card>
        {
          rover.photos.map(item => <Img src={item.img_src} alt={`rover-${rover.rover_name}`} />)
        }
      </Card>
    </Card>
  );
};

export default PhotosList;