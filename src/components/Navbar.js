import React from 'react';
import { Nav, Title } from '../styles/StyledComponents';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const NavBar = () => {
    return (
        <Nav className="col-12 d-flex justify-content-start align-items-center">
            <Title className="m-0">
                gamma
            </Title>
        </Nav>
    );
};

export default NavBar;