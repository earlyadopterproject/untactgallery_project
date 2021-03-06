import React from "react";
import styled from "styled-components";
import cardimg from "../img/header.PNG"

const Container = styled.div`
  padding:50px;
  width: 100%;
  height: 30px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MemberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 7px;
`;

const Member = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin: 7px;
`;

const Footer = () => {
  return <Container>
    <MemberWrapper>
      <Member> 이동건 </Member>
      <Member> 이동윤 </Member>
      <Member> 김영석 </Member>
    </MemberWrapper>
  </Container>;
};

export default Footer;