import styled from 'styled-components';

const Nav = styled.nav`
  background-color: black;
  height: 45px;
  padding: 0 3.5%;
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

const Select = styled.input`
  height: 40px;
`;

const Card = styled.div`
  border: 1px solid blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Catalog = styled.div`
  border: 1px solid blue;
  width: 1170px;
  margin: 0 auto;
  padding: 27px;
`;

const Img = styled.img`
  width: 350px;
  height: 350px;
  margin: 10px;
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
    Select,
    Card,
    Catalog,
    Img,
    Footy
}