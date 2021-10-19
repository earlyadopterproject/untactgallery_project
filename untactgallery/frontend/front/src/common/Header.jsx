import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import cardimg from "../img/header.PNG"

const Container = styled.div`
  width: 100vw;
  padding: 30px 0px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(${cardimg});
  background-size: cover;
  gap: 15px;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color : red;
  
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  font-display: center;
  font-size: 9pt;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const history = useHistory();
  return (
    <Container>
      <BoxWrapper>
        <Logo>
          <Box onClick={() => history.push("/")}>
            로고
          </Box>
        </Logo>
      </BoxWrapper>
      <BoxWrapper>
        <Box onClick={() => history.push("artist-detail")}>
            작가
        </Box>
        <Box onClick={() => history.push("product-detail")}>
            작품
        </Box>
      </BoxWrapper>
      <BoxWrapper>
        <Box onClick={() => history.push("basket-detail")}>
            장바구니
        </Box>
        <Box onClick={() => history.push("login-detail")}>
            로그인
        </Box>
      </BoxWrapper>
    </Container>
  );
};

export default Header;