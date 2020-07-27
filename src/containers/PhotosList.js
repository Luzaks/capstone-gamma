import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Card, CardMenu, ParMenu, Catalog, MenuItem} from '../styles/StyledComponents';
import Photo from '../components/photoComponents/Photo';
import CameraFilter from '../components/photoComponents/CameraFilter';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import PropTypes from 'prop-types';

const PhotosList = ({ visitedState, rover, solState, cameras, filterState}) => {

  const dispatch = useDispatch();
  const roverState = useSelector(state => state.rover);


  const filterHelper = (filter) => {
    if (filter === 'ALL') return roverState.photos;
    else return roverState.photos.filter(photo => ( photo.camera.name === filter));
  };

  const infoHelper = (solState) => {
      const roverInfo = (
          <ParMenu>
              Rover: {roverState.rover_name}  Martian Day: {solState}
          </ParMenu>
      );
      if (solState !== 'Choose..') return roverInfo;
  };

  const visitedHelper = (visitedState) => {
      const visitedInfo = (
          <ParMenu>
              Last visited: {visitedState}
          </ParMenu>
      );
      if (visitedState !== '') return visitedInfo;
  };

  const PhotoListHelper = (filterState) => {

      const photosList = filterHelper(filterState).map(item => <Photo dispatch={dispatch} key={item.id} item={item} rover={roverState} />)
      const noPhotos = (
          <div>
              There aren't photos for today
          </div>
      );
      const noCamPhotos = (
          <div>
              There aren't photos for this camera
          </div>
      );
      const loadingPhotos = (
          <div>
              Loading
          </div>
      );
      const appInstructions = (
          <div>
              Choose a Rover, pick a day and click on see button to show images.
          </div>
      );
      const appError = (
          <div>
              {roverState.error}
          </div>
      );

      if (roverState.rover_name === '' && roverState.photos.length === 0 && roverState.sol ==='Choose..' && roverState.error === '' && roverState.loading === false) return appInstructions;
      else if ((roverState.rover_name === '' && roverState.photos.length === 0 && roverState.sol ==='Choose..' && roverState.error === '' && roverState.loading === true) || roverState.loading === true ) return loadingPhotos;
      else if (roverState.error !== '') return appError;
      else if (roverState.photos.length === 0 && roverState.rover_name !== '' && roverState.loading === false) return noPhotos;
      else if (photosList.length > 0 && roverState.rover_name !== '' && roverState.loading === false) return photosList;
      else if (photosList.length === 0 && roverState.rover_name !== '' && roverState.loading === false) return noCamPhotos;
  };

  return (
    <Card>
      <CardMenu>
          <MenuItem>
              {infoHelper(solState)}
          </MenuItem>
        <MenuItem>
          <CameraFilter filterState={filterState} dispatch={dispatch} cameras={cameras} />
        </MenuItem>
        <MenuItem>
            { visitedHelper(visitedState) }
        </MenuItem>
      </CardMenu>
      <Card>
        <Catalog>
          {
              PhotoListHelper(filterState)
          }
        </Catalog>
      </Card>
    </Card>
  );
};

PhotosList.propTypes = {
  cameras: PropTypes.array.isRequired,
  filterState: PropTypes.string.isRequired,
  visitedState: PropTypes.string.isRequired
};

export default PhotosList;