import styled from "styled-components";
import { TABLET } from "../../constants/screen";

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
`;
