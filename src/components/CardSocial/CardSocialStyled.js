import styled from "styled-components";
import { TABLET } from "../../constants/screen";

export const Container = styled.div`
  background: ${({ theme }) => theme.card};
  width: 150px;
  border-radius: 20px;
  padding: 9px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ color }) => color};
    transform: translateY(-0.25em);
    transition: 0.3s;
  }

  @media (max-width: ${TABLET}) {
    margin: 7px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.div`
  background: ${({ theme }) => theme.card};
  background: url(${({ icon }) => icon});
  background-size: contain;
  width: 35px;
  height: 35px;
  border-radius: 15px;
  margin-right: 20px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.title};
  font-weight: 500;
  font-size: 18px;
`;
