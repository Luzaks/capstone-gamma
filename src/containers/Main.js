import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetch_api from '../Redux/actions/actions';
import PhotosList from './PhotosList';
import { camerasCreator } from '../Redux/actions/actions';
import { InputRow, ImgsRow } from '../styles/StyledComponents';
import FetchingRover from '../components/FetchingRover';
import FetchingSol from '../components/FetchingSol';
import SubmitButton from '../components/SubmitButton';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Main = () => {

  const [rover, set_rover] = useState('');
  const [sol, set_sol] = useState(0);
  const dispatch = useDispatch();
  const rovers = ['curiosity', 'opportunity', 'spirit'];

  const cur_set = ['ALL', 'FHAZ', 'RHAZ', 'MAST', 'CHEMCAM' , 'MAHLI', 'MARDI', 'NAVCAM'];
  const cams_set = ['ALL', 'FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

  const uiHelper = (roverName) => {
    if (roverName === 'curiosity') dispatch(camerasCreator(cur_set));
    else dispatch(camerasCreator(cams_set))
  };

    return (
      <div className="container">
        <InputRow className="row col-12">
          <FetchingRover setRover={set_rover} rovers={rovers} />
          <FetchingSol setSol={set_sol} sol={sol} />
          <SubmitButton rover={rover} uiHelper={uiHelper} dispatch={dispatch} sol={sol} />
        </InputRow>
        <ImgsRow className="row col-12">
          <PhotosList />
        </ImgsRow>
      </div>
    );
};

export default Main;