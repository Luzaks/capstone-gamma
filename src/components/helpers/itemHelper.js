import React from 'react';
import UndefinedError from '../itemComponents/UndefinedError';
import DetailsItem from '../itemComponents/DetailsItem';

const itemHelper = (lastVisited, photo) => {
  if (lastVisited === undefined && photo.camera === undefined) return <UndefinedError />;
  return (
    <DetailsItem
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

export default itemHelper;
