import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import fetch_api from '../Redux/actions/actions';
import PhotosList from './PhotosList';

const InputRow = styled.div`
  border: 1px solid black;
`;

const ImgsRow = styled.div`
  border: 1px solid red;
`;

const Input = styled.input`
  color: red;
`;

const Main = () => {


  const [sol, set_sol] = useState(0);
  const dispatch = useDispatch();
    const rovers = ['curiosity', 'opportunity', 'spirit'];

/*
const cur_set = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM' , 'MAHLI', 'MARDI', 'NAVCAM'];
  const cams_set = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'];

  const camerasHelper = (cams) => {
      if (rover.rover_name === 'curiosity') dispatch(cur_set);
      else dispatch(cams_set)
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch_api('curiosity');
      dispatch(response);
    }
    fetchData().then(r => r);
  }, [dispatch]);
*/
    return (
      <div className="container">
        <InputRow className="row col-12">
            <select className="filter-selector" name="filter"
                    >
                <option value="Rovers" selected disabled hidden>Rovers</option>
                {
                    rovers.map(rover =>
                        <option key={rover} value={rover}>
                            {rover}
                        </option>)
                }
            </select>
            <label htmlFor="sol">Sol:</label>
            <input type="number" id="sol" name="sol" min="0" max="1000"
                   value={ sol }
                   onChange={
                       (ev) => {
                           set_sol(ev.target.value);
                       }
                   }/>

            <button className="btn btn-primary mt-3"
                    onClick={() => {
                        dispatch(fetch_api('curiosity',sol));
                    }}>
                Submit
            </button>
        </InputRow>
        <ImgsRow className="row col-12">
          <PhotosList />
        </ImgsRow>
      </div>
    );
};

export default Main;