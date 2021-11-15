import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import cardimg from "../img/header.PNG"
import logo from "../img/untact.png"

const Container = styled.div`
  padding: 30px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
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
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

const Box = styled.div`
  width: auto;
  height: 50px;
  color: white;
  font-size: 15pt;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;


const Header = () => {
    const history = useHistory();
    return (
        <Container>
            <BoxWrapper>
                <Logo onClick={() => history.push("/")}>

                </Logo>
            </BoxWrapper>
            <BoxWrapper>
                <Box onClick={() => history.push("artist-detail")}>
                    작가
                </Box>
                <Box onClick={() => history.push("product")}>
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