import styled from "styled-components";
import { TABLET, MOBILE } from "../../constants/screen";

export const Container = styled.div`
  background: ${({ theme }) => theme.card};
  max-width: 1100px;
  flex: 1;
  border-radius: 20px;
  padding: 0px 10px 10px 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${TABLET}) {
    width: unset;
  }

  @media (max-width: ${MOBILE}) {
    border-radius: 0px;
    margin-top: 90px;
    height: calc(100vh - 250px);
    height: calc(var(--vh, 1vh) * 100 - 250px);
  }
`;
