import styled from "styled-components";
import profile from "../../assets/profile.jpg";
import profileMobile from "../../assets/profile_mobile.jpg";
import { DESKTOP_SMALL, MOBILE } from "../../constants/screen";

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

  @media (max-width: ${DESKTOP_SMALL}) {
    flex-direction: row-reverse;
    padding: 30px;
    width: unset;
  }

  @media (max-width: ${MOBILE}) {
    border-radius: 0px;
    padding: 10px;
    background-image: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (max-width: ${DESKTOP_SMALL}) {
    align-items: flex-start;
    margin-left: 30px;
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
    height: unset;
    background-image: none;
  }

  @media (max-width: ${MOBILE}) {
    border-radius: 0px;
    border-bottom: ${({ theme }) => `2px solid ${theme.background}`};
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
  border-radius: 20px;
  margin-bottom: 100px;

  @media (min-width: ${DESKTOP_SMALL}) {
    display: none;
    margin: 0px;
  }

  @media (max-width: ${DESKTOP_SMALL}) {
    width: 150px;
    height: 150px;
    min-width: 150px;
    min-height: 150px;
    margin-bottom: 0px;
  }

  @media (max-width: ${MOBILE}) {
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    border-radius: 10px;
  }
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.title};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: ${DESKTOP_SMALL}) {
    text-align: left;
    margin-bottom: 10px;
  }

  @media (max-width: ${MOBILE}) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const Bio = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  text-align: center;
  font-weight: 300;
  margin-bottom: 30px;

  @media (max-width: ${DESKTOP_SMALL}) {
    text-align: left;
    margin-bottom: 25px;
  }

  @media (max-width: ${MOBILE}) {
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const SeeSkills = styled.div`
  display: none;
  color: ${({ theme }) => theme.primaryText};
  font-size: 12px;
  font-weight: bold;
  margin: 5px 0px;
  cursor: pointer;

  @media (max-width: ${MOBILE}) {
    display: flex;
  }
`;

export const Pills = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;

  @media (max-width: ${DESKTOP_SMALL}) {
    justify-content: flex-start;
    margin-bottom: 0px;
  }

  @media (max-width: ${MOBILE}) {
    display: ${({ shouldDisplay }) => (shouldDisplay ? "flex" : "none")};
    margin-left: -10px;
    margin-top: 10px;
  }
`;
