import React from 'react';
import { Link } from 'react-router-dom';
import { Help } from '../../styles/StyledComponents';

const UndefinedError = () => (
  <Help>
    <Link to={{ pathname: '/' }}>
      <p className="m-0"> ← go to homepage</p>
    </Link>
    <p className="m-0">
      Ups.Something went wrong.
    </p>
  </Help>
);

export default UndefinedError;
