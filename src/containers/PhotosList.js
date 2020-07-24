import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Catalog } from '../styles/StyledComponents';
import Photo from '../components/photoComponents/Photo';
import CameraFilter from '../components/photoComponents/CameraFilter';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const PhotosList = () => {

  const dispatch = useDispatch();
  const roverState = useSelector(state => state.rover);
  const filterState = useSelector(state => state.filter);
  const cameras = useSelector(state => state.cameras);

  const filterHelper = (filter) => {
    if (filter === 'ALL') return roverState.photos;
    else return roverState.photos.filter(photo => ( photo.camera.name === filter));
  };

  return (
    <Card>
      <Card>
        <CameraFilter dispatch={dispatch} cameras={cameras} />
      </Card>
      <Card>
        <Catalog>
          {
            filterHelper(filterState).map(item => <Photo item={item} rover={roverState} />)
          }
        </Catalog>
      </Card>
    </Card>
  );
};

export default PhotosList;