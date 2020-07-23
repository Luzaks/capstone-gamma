import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import fetch_api from '../Redux/actions/actions';

const InputRow = styled.div`
    border: 1px solid black;
`;

const CardRow = styled.div`
    border: 1px solid red;
`;

const Input = styled.input`
    color: red;
`;

const Card = styled.div`
    border: 1px solid blue;
`;

const Main = () => {

    const dispatch = useDispatch();

    return (
      <div className="container">
          <InputRow className="row col-12">
              <Input type="select"/>
          </InputRow>
          <CardRow className="row col-12">
              <Card className="card">
                  <button
                  onClick={() => {
                      dispatch(fetch_api());
                  }}>

              </button>
              </Card>
          </CardRow>
      </div>
    );
};

export default Main;