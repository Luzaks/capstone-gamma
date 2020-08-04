const filterPhotosHelper = (filter, roverState) => {
  if (filter === 'ALL') return roverState.photos;
  return roverState.photos.filter(photo => (photo.camera.name === filter));
};

export default filterPhotosHelper;
