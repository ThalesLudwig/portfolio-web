import styled from "styled-components";
import { TABLET } from "../../constants/screen";

export const Container = styled.div`
  background: ${({ theme }) => theme.card};
  width: 100%;
  padding: 13px 0px;
  bottom: 0px;
  position: fixed;
  border-top: ${({ theme }) => theme.grey} 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${TABLET}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Label = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.title};
  cursor: pointer;
  width: 130px;
  margin: 0px 20px;
  display: flex;
  align-items: center;

  @media (max-width: ${TABLET}) {
    margin: 10px;
    justify-content: center;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Triangle = styled.span`
  color: red;
`;

export const SocialRow = styled.div`
  width: max-content;
  display: flex;
  flex-direction: row;
`;

export const Link = styled.a`
  text-decoration: none;
`

export const SocialIcon = styled.div`
  background: ${({ theme }) => theme.card};
  background: url(${({ icon }) => icon});
  background-size: contain;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;