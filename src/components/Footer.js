import React from 'react';
import styled from "styled-components";

const Footy = styled.footer`
  background-color: black;
  color: white;
  padding: 0 7.5%;
`;

const Footer = () => {
  return (
    <Footy className="col-12 d-flex justify-content-start align-content-center">
      footer
    </Footy>
  );
};

export default Footer;