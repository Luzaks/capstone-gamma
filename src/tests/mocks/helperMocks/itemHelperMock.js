import React from 'react';
import UndefinedError from '../../../components/itemComponents/UndefinedError';
import DetailsItemMock from './detailsItemMock';

const itemHelperMock = (lastVisited, photo) => {
  if (lastVisited === undefined && photo.camera === undefined) return <UndefinedError />;
  return (
    <DetailsItemMock
      id={photo.id}
      imgSrc={photo.img_src}
      fullName={photo.camera.full_name}
      camName={photo.camera.name}
      sol={photo.sol}
      earthDate={photo.earth_date}
      rover={photo.rover}
    />
  );
};

export default itemHelperMock;
