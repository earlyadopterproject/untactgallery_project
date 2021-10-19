import React from "react";
import styled from "styled-components";
import NewArtist from "../components/main/NewArtist";
import Product from "../components/main/Product";
import TodayArtist from "../components/main/TodayArtist";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;


const Main = () => {
  return (
    <Container>
      <NewArtist />
      <TodayArtist />
      <Product />
    </Container>
  );
};

export default Main;
