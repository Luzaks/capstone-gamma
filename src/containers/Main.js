import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PhotosList from './PhotosList';
import { camerasCreator } from '../Redux/actions/actions';
import { ImgsRow } from '../styles/StyledComponents';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Main = () => {

  const [rover, set_rover] = useState('');
  const [sol, set_sol] = useState('');
  const dispatch = useDispatch();
  const rovers = ['curiosity', 'opportunity', 'spirit'];

  const cur_set = ['ALL', 'FHAZ', 'RHAZ', 'MAST', 'CHEMCAM' , 'MAHLI', 'MARDI', 'NAVCAM'];
  const cams_set = ['ALL', 'FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

  const uiHelper = (roverName) => {
    if (roverName === 'curiosity') dispatch(camerasCreator(cur_set));
    else dispatch(camerasCreator(cams_set))
  };

    return (
      <div className="main-container row">
          <NavBar setRover={set_rover} rovers={rovers} setSol={set_sol} sol={sol} rover={rover}  uiHelper={uiHelper}  dispatch={dispatch} />
        <ImgsRow className="container col-12 d-flex align-items-center justify-content-center">
          <PhotosList />
        </ImgsRow>
      </div>
    );
};

export default Main;