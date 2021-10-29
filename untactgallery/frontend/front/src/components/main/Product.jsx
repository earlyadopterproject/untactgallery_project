import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 91vw;
  height: 300px;
  background-color: purple;
  margin: 30px;
`;

const Box = styled.div`
  display: flex;
  background-color: red;
  justify-content: center;
`;

const Product = () => {
  return <Container>
    <Box>
      오늘의 작품
    </Box>
  </Container>;
};

export default Product;
