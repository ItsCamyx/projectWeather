import styled from 'styled-components';
// import * as Color from 'Color';

export const Content = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  font-weight: 700;
  border-radius: 16px;
  margin-top: 16px;

  p {
    font-size: 16px;
  }
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1100px) {
    width: 50%;
  }
  @media (min-width: 2000px) {
    width: 30%;
  }
`;
export const TitleContainer = styled.div`
  background-color: rgba(112, 112, 112, 0.8);
  width: 100%;
  height: 15%;
  border-radius: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 16px 0px;
`;
export const ImgTitleContainer = styled.div`
  padding: 16px;
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ContainerWeatherData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  border-radius: 14px;
  transition: 1s;
  &:hover {
  }
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
export const ContentImgLeft = styled.div`
  display: flex;
  padding: 30px;
  img {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;
export const ContentDetailsRight = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 600px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 24px;
    }
  }
`;
export const ContainerSpace = styled.div`
`;
