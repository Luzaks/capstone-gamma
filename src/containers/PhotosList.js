import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCreator } from '../Redux/actions/actions';
import { Card } from '../styles/StyledComponents';
import Photo from '../components/Photo';
import CameraFilter from '../components/CameraFilter';
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
        <CameraFilter dispatch={dispatch} cameras={cameras} />
      <Card>
        {
          filterHelper(filterState).map(item => <Photo item={item} rover={roverState} />)
        }
      </Card>
    </Card>
  );
};

export default PhotosList;