import React from 'react';
import PropTypes from 'prop-types';
import {InputRow, Nav, Title} from '../styles/StyledComponents';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import FetchingRover from '../components/fetchComponents/FetchingRover';
import FetchingSol from '../components/fetchComponents/FetchingSol';
import SubmitButton from '../components/fetchComponents/SubmitButton';

import { Link } from 'react-router-dom';

const NavBar = ({ setRover, rovers, setSol, sol, rover, uiHelper, dispatch }) => {
    return (
        <Nav className="col-12 d-flex justify-content-between align-items-center">
            <Title className="m-0">
                <Link to={{pathname: '/'}}> gamma </Link>
            </Title>
            <InputRow className="row">
                <FetchingRover setRover={setRover} rovers={rovers} />
                <FetchingSol setSol={setSol} sol={sol} />
                <SubmitButton rover={rover} uiHelper={uiHelper} dispatch={dispatch} sol={sol} />
            </InputRow>
        </Nav>
    );
};

NavBar.propTypes = {
    setRover: PropTypes.func.isRequired,
    rovers: PropTypes.array.isRequired,
    setSol: PropTypes.func.isRequired,
    sol: PropTypes.string.isRequired,
    rover: PropTypes.string.isRequired,
    uiHelper: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default NavBar;