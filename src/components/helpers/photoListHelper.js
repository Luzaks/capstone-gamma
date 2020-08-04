import React from 'react';
import filterPhotosHelper from './filterPhotosHelper';
import Photo from '../photoComponents/Photo';
import { Help } from '../../styles/StyledComponents';
import Loader from '../photoComponents/loaderComponent';

const PhotoListHelper = (filterState, roverState, dispatch) => {
  const photosList = filterPhotosHelper(filterState, roverState).map(item => (
    <Photo
      dispatch={dispatch}
      key={item.id}
      item={item}
      rover={roverState}
    />
  ));
  const noPhotos = (
    <Help>
      There are not photos for this day.
    </Help>
  );
  const noCamPhotos = (
    <Help>
      There are no photos for this camera.
    </Help>
  );
  const loadingPhotos = (
    <Help>
      <Loader />
    </Help>
  );
  const appInstructions = (
    <Help>
      Choose a rover, pick a day (from one to one hundred)
      and click on see button to show images.
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

export default PhotoListHelper;
