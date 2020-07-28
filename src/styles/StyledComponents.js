import styled from 'styled-components';

const Nav = styled.nav`
  height: 45px;
  padding: 0 3.5%;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  height: fit-content;
  font-family: DomillionBrushFree;
`;

const InputRow = styled.div`
  
`;

const ImgsRow = styled.div`
  min-height: calc(100vh - 65.5px);
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
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
  padding: 0 25% 0 24%;
  margin-top: 13.5px;
`;

const MenuItemStart = styled.div`
  width: 33%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const MenuItemEnd = styled.div`
  width: 33%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: end;
`;

const MenuItem = styled.div`
  width: 33%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParMenu = styled.p`
  margin: 0;
  font-size: 15px;
`;

const Catalog = styled.div`
  width: 1170px;
  min-height: 100%;
  margin: 0 auto;
  padding: 13.5px 27px;
`;

const Help = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  height: 20px;
  font-size: 14px;
  color: black;
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
  MenuItemStart,
  MenuItemEnd,
  MenuItem,
  PhotoContainer,
  ImgContainer,
  Catalog,
  Help,
  Img,
  Footy,
};
