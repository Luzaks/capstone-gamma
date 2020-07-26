import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Card, Catalog} from '../styles/StyledComponents';
import Photo from '../components/photoComponents/Photo';
import CameraFilter from '../components/photoComponents/CameraFilter';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import PropTypes from 'prop-types';

const PhotosList = ({cameras, filterState}) => {

  const dispatch = useDispatch();
  const roverState = useSelector(state => state.rover);


  const filterHelper = (filter) => {
    if (filter === 'ALL') return roverState.photos;
    else return roverState.photos.filter(photo => ( photo.camera.name === filter));
  };

  return (
    <Card>
      <Card>
        <CameraFilter filterState={filterState} dispatch={dispatch} cameras={cameras} />
      </Card>
      <Card>
        <Catalog>
          {
            filterHelper(filterState).map(item => <Photo dispatch={dispatch} key={item.id} item={item} rover={roverState} />)
          }
        </Catalog>
      </Card>
    </Card>
  );
};

PhotosList.propTypes = {
  cameras: PropTypes.array.isRequired,
  filterState: PropTypes.string.isRequired
};

export default PhotosList;