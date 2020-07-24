import React from 'react';
import {InputRow, Nav, Title} from '../styles/StyledComponents';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import FetchingRover from '../components/fetchComponents/FetchingRover';
import FetchingSol from '../components/fetchComponents/FetchingSol';
import SubmitButton from '../components/fetchComponents/SubmitButton';

const NavBar = ({ setRover, rovers, setSol, sol, rover, uiHelper, dispatch }) => {
    return (
        <Nav className="col-12 d-flex justify-content-between align-items-center">
            <Title className="m-0">
                gamma
            </Title>
            <InputRow className="row col-6">
                <FetchingRover setRover={setRover} rovers={rovers} />
                <FetchingSol setSol={setSol} sol={sol} />
                <SubmitButton rover={rover} uiHelper={uiHelper} dispatch={dispatch} sol={sol} />
            </InputRow>
        </Nav>
    );
};

export default NavBar;