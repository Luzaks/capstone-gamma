import styled from 'styled-components';

const Nav = styled.nav`
  background-color: black;
  height: 45px;
  padding: 0 7.5%;
`;

const Title = styled.h1`
  font-size: 16px;
  color: white;
  height: fit-content;
`;

const InputRow = styled.div`
  border: 1px solid black;
`;

const ImgsRow = styled.div`
  border: 1px solid red;
`;

const Input = styled.input`
  color: red;
`;

const Card = styled.div`
  border: 1px solid blue;
  width: 100%;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  margin: 20px;
`;

const Footy = styled.footer`
  background-color: black;
  color: white;
  padding: 0 7.5%;
`;

export {
    Nav,
    Title,
    InputRow,
    ImgsRow,
    Input,
    Card,
    Img,
    Footy
}