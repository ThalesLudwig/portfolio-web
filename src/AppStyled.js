import styled, { createGlobalStyle } from "styled-components";
import { TABLET, DESKTOP_SMALL, MOBILE } from "./constants/screen";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    margin: 0px;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-height: 800px) and (min-width: ${DESKTOP_SMALL}) {
    height: 100vh;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.background};
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap-reverse;
  margin-bottom: 55px;

  @media (max-width: ${TABLET}) {
    padding: 0px;
    margin-bottom: 85px;
  }
`;

export const ProfileWrapper = styled.div`
  margin-left: 20px;

  @media (max-width: ${DESKTOP_SMALL}) {
    margin-left: 0px;
    margin-bottom: 20px;
  }

  @media (max-width: ${MOBILE}) {
    margin-bottom: 1px;
    position: fixed;
    top: 0;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${TABLET}) {
    margin-bottom: 15px;
  }

  @media (max-width: ${TABLET}) {
    justify-content: center;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GoButtonWrapper = styled.div`
  margin-left: 10px;
`;

export const SuggestionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: 10px;
  height: 500px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${MOBILE}) {
    height: calc(100vh - 380px);
  }
`;

export const FlagRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 0px 10px 0px;
`;

export const Flag = styled.div`
  background-color: ${({ theme }) => theme.card};
  background: url(${({ icon }) => icon});
  background-size: cover;
  background-repeat: repeat;
  width: 35px;
  height: 25px;
  border-radius: 4px;
  margin: 0px 5px;
  cursor: pointer;
  border: 2px ${({ theme, isActive }) => (isActive ? theme.title : theme.card)}
    solid;
`;

export const SuggestionsInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};

  @media (max-width: ${MOBILE}) {
    position: fixed;
    bottom: 82px;
    left: 0;
    right: 0;
    padding: 10px;
    border-top: ${({ theme }) => `2px solid ${theme.background}`};
  }
`;
