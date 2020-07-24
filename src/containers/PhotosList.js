import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCreator } from '../Redux/actions/actions';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Card, Img } from '../styles/StyledComponents';

const PhotosList = () => {

  const dispatch = useDispatch();
  const rover = useSelector(state => state.rover);
  const filterState = useSelector(state => state.filter);
  const cameras = useSelector(state => state.cameras);

  const filterHelper = (filter) => {
      if (filter === 'ALL') return rover.photos;
      else return rover.photos.filter(photo => ( photo.camera.name === filter));
  };

  return (
    <Card>
      <div>
        <select className="filter-selector" name="Cams" onChange={(ev) => {
          dispatch(filterCreator(ev.target.value));
        }}>
            <option value="Cameras" selected disabled hidden > CAMERA </option>
          { cameras.map(camera => <option key={camera} value={camera}>{camera}</option>)}
        </select>
      </div>
      <Card>
          {
              filterHelper(filterState).map(item => <Img src={item.img_src} alt={`rover-${rover.rover_name}`} />)
          }
      </Card>
    </Card>
  );
};

export default PhotosList;