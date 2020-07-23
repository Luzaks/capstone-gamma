import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const NavBar = styled.nav`
  background-color: black;
  height: 45px;
  padding: 0 7.5%;
`;

const Title = styled.h1`
  font-size: 16px;
  color: white;
  height: fit-content;
`;

const Navbar = () => {
    return (
        <NavBar className="col-12 d-flex justify-content-start align-items-center">
            <Title className="m-0">
                gamma
            </Title>
        </NavBar>
    );
};

export default Navbar;