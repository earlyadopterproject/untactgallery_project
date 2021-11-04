import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const Container = styled.div`
  width: 100vw;
  padding: 10px 0px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #81B622;
  gap: 15px;
`;

const BoxWrapper = styled.div`
  display: flex;
  gap: 30px;
  font-family: "NanumSquare";
  font-size: 14pt;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-family: "DancingScript";
  font-size: 18pt;
  width: auto;
  height: 50px;
`;

const Box = styled.div`
  width: auto;
  height: 50px;
  color: white;
  font-display: center;
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
            GUREUM GALLERY
          </Box>
        </Logo>
      </BoxWrapper>
      <BoxWrapper>
        <Box onClick={() => history.push("artist-detail")}>
            ARTIST
        </Box>
        <Box onClick={() => history.push("product-detail")}>
            ARTWORK
        </Box>
      </BoxWrapper>
      <BoxWrapper>
        <Button onClick={() => history.push("basket-detail")}>
            CART
        </Button>
        <Button onClick={() => history.push("login-detail")}>
            LOGIN
        </Button>
      </BoxWrapper>
    </Container>
  );
};

export default Header;