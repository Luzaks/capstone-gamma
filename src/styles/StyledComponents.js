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

const Card = styled.div`
  border: 1px solid blue;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const MenuItem = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParMenu = styled.p`
  margin: 0;
`;

const Catalog = styled.div`
  border: 1px solid blue;
  width: 1170px;
  margin: 0 auto;
  padding: 27px;
`;

const PhotoContainer = styled.div`
 width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float: left;
  margin: 10px;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  float: left;
  :hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 350px;
  height: 350px;
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
  Card,
  CardMenu,
  ParMenu,
  MenuItem,
  PhotoContainer,
  ImgContainer,
  Catalog,
  Img,
  Footy,
};
