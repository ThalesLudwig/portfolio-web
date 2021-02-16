import styled from "styled-components";
import profile from "../../assets/profile.jpg";
import profileMobile from "../../assets/profile_mobile.jpg";
import { TABLET, DESKTOP_SMALL } from "../../constants/screen";

export const Container = styled.div`
  background-image: linear-gradient(
    transparent,
    transparent,
    ${({ theme }) => theme.card} 59%
  );
  border-radius: 20px;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  padding: 0px 30px;
  align-items: center;

  @media (max-width: ${DESKTOP_SMALL}) {
    width: unset;
  }

  @media (max-width: ${TABLET}) {
    border-radius: 0px;
  }
`;

export const BackgroundImage = styled.div`
  background: ${({ theme }) => theme.card};
  background-image: url(${profile});
  background-repeat: no-repeat;
  background-size: contain;
  width: 336px;
  height: 700px;
  border-radius: 20px;

  @media (max-width: ${DESKTOP_SMALL}) {
    width: unset;
    background-image: none;
  }

  @media (max-width: ${TABLET}) {
    border-radius: 0px;
  }
`;

export const MobileImage = styled.div`
  background: ${({ theme }) => theme.card};
  background-image: url(${profileMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-bottom: 100px;

  @media (min-width: ${DESKTOP_SMALL}) {
    display: none;
    margin: 0px;
  }

  @media (max-width: ${TABLET}) {
    width: 200px;
    height: 200px;
  }
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.title};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Bio = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  text-align: center;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const Pills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;
