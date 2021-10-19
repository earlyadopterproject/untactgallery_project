import React from "react";
import styled from "styled-components";
import cardimg from "../../img/header.PNG";

const Container = styled.div`
  width: 91vw;
  height: 300px;
  background-color: green;
  text-align: center;
  margin: 30px 30px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 20%;
  height: 250px;
  border-radius: 8px;
  background-color: skyblue;
  transition: 1.5s ease-in-out all;
  gap: 20px;
  &:hover {
    transform: rotateY(720deg);
  }
`;

const Profile = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${cardimg});
`;

const Name = styled.div`
  font-size: 27px;
`;

const Intro = styled.div`
  font-size: 11px;
`;

const Major = styled.div`
  font-size: 15px;
`;

const Details = styled.div``;
// Card 나중에 mapping 시키기
const NewArtist = () => {
  return (
    <Container>
      신규작가
      <CardWrapper>
        <Card>
          <Profile />
          <Name> 이 동건</Name>
          <Major> 소묘 </Major>
          <Intro> 소묘 작가 이동건 입니다.</Intro>
        </Card>
        <Card>
          <Profile/>
          <Name> 김 영석</Name>
          <Major> 풍경화 </Major>
          <Intro> 풍경화 작가 김영석 입니다.</Intro>
        </Card>
        <Card>
          <Profile />
          <Name> 이 동윤</Name>
          <Major> 채색 </Major>
          <Intro> 채색 작가 이동윤 입니다.</Intro>
        </Card>
        <Card>
          <Profile />
          <Name> 유 해식</Name>
          <Major> 조각 </Major>
          <Intro> 조각 작가 유해식 입니다.</Intro>
        </Card>

      </CardWrapper>
    </Container>
  );
};

export default NewArtist;
