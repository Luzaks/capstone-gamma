import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhotosList from './PhotosList';
import { camerasCreator } from '../Redux/actions/actions';
import { ImgsRow } from '../styles/StyledComponents';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Main = () => {
  const [rover, setRover] = useState('');
  const [sol, setSol] = useState('1');
  const roverState = useSelector(state => state.rover.rover_name);
  const solState = useSelector(state => state.rover.sol);
  const visitedState = useSelector(state => state.lastVisited);
  const dispatch = useDispatch();
  const rovers = ['Curiosity', 'Opportunity', 'Spirit'];

  const curSet = ['ALL', 'FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'];
  const camsSet = ['ALL', 'FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

  const uiHelper = roverName => {
    if (roverName === 'Curiosity') dispatch(camerasCreator(curSet));
    else dispatch(camerasCreator(camsSet));
  };

  const cameras = useSelector(state => state.cameras);
  const filterState = useSelector(state => state.filter);

  return (
    <div className="main-container row">
      <NavBar
        roverState={roverState}
        setRover={setRover}
        rovers={rovers}
        setSol={setSol}
        sol={sol}
        solState={solState}
        rover={rover}
        uiHelper={uiHelper}
        dispatch={dispatch}
      />
      <ImgsRow className="container col-12 d-flex flex-column align-items-center justify-content-center">
        <PhotosList
          visitedState={visitedState}
          rover={rover}
          solState={solState}
          filterState={filterState}
          cameras={cameras}
        />
      </ImgsRow>
    </div>
  );
};

export default Main;
