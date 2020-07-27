import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, CardMenu, ParMenu, Catalog, MenuItem, Help, MenuItemStart, MenuItemEnd
} from '../styles/StyledComponents';
import Photo from '../components/photoComponents/Photo';
import CameraFilter from '../components/photoComponents/CameraFilter';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const PhotosList = ({
  visitedState, solState, cameras, filterState,
}) => {
  const dispatch = useDispatch();
  const roverState = useSelector(state => state.rover);

  const filterHelper = filter => {
    if (filter === 'ALL') return roverState.photos;
    return roverState.photos.filter(photo => (photo.camera.name === filter));
  };

  const infoHelper = solState => {
    const roverInfo = (
      <ParMenu>
        {roverState.rover_name}
        {' '}
        rover at
        {' '}
        day
        {' '}
        {solState}
      </ParMenu>
    );
    if (solState !== 'Choose..') return roverInfo;
    return <div />;
  };

  const visitedHelper = visitedState => {
    const visitedNone = (
      <ParMenu>
        Last visited:
        None
      </ParMenu>
    );
    const visitedInfo = (
      <ParMenu>
        Last visited:
        {visitedState}
      </ParMenu>
    );
    if (visitedState === 0 && roverState.rover_name !== '' && roverState.photos.length !== 0 && roverState.sol !== 'Choose..') return visitedNone;
    if (visitedState !== 0 && roverState.rover_name !== '' && roverState.photos.length !== 0 && roverState.sol !== 'Choose..') return visitedInfo;
    return <div />;
  };

  const PhotoListHelper = filterState => {
    const photosList = filterHelper(filterState).map(item => (
      <Photo
        dispatch={dispatch}
        key={item.id}
        item={item}
        rover={roverState}
      />
    ));
    const noPhotos = (
      <Help>
        There are not photos for today
      </Help>
    );
    const noCamPhotos = (
      <Help>
        There are no photos for this camera
      </Help>
    );
    const loadingPhotos = (
      <Help>
        Loading
      </Help>
    );
    const appInstructions = (
      <Help>
        Choose a rover, pick a day and click on see button to show images.
      </Help>
    );
    const appError = (
      <Help>
        {roverState.error}
      </Help>
    );

    if (roverState.rover_name === '' && roverState.photos.length === 0 && roverState.sol === 'Choose..' && roverState.error === '' && roverState.loading === false) return appInstructions;
    if ((roverState.rover_name === '' && roverState.photos.length === 0 && roverState.sol === 'Choose..' && roverState.error === '' && roverState.loading === true) || roverState.loading === true) return loadingPhotos;
    if (roverState.error !== '') return appError;
    if (roverState.photos.length === 0 && roverState.rover_name !== '' && roverState.loading === false) return noPhotos;
    if (photosList.length > 0 && roverState.rover_name !== '' && roverState.loading === false) return photosList;
    if (photosList.length === 0 && roverState.rover_name !== '' && roverState.loading === false) return noCamPhotos;
    return <Help />;
  };

  return (
    <Card>
      <CardMenu>
        <MenuItemEnd>
          {infoHelper(solState)}
        </MenuItemEnd>
        <MenuItem>
          <CameraFilter filterState={filterState} dispatch={dispatch} cameras={cameras} />
        </MenuItem>
        <MenuItemStart>
          { visitedHelper(visitedState) }
        </MenuItemStart>
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
  cameras: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterState: PropTypes.string.isRequired,
  visitedState: PropTypes.number.isRequired,
  solState: PropTypes.string.isRequired,
};

export default PhotosList;
