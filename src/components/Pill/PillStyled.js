import styled from "styled-components";
import { MOBILE } from "../../constants/screen";

export const Container = styled.div`
  background: ${({ isPrimary, theme }) =>
    isPrimary ? theme.primary : theme.grey};
  font-weight: 400;
  font-size: 14px;
  padding: 10px 14px;
  color: ${({ isPrimary, theme }) => (isPrimary ? theme.white : theme.title)};
  border-radius: 30px;
  width: max-content;
  margin: 5px;
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};

  @media (max-width: ${MOBILE}) {
    border-radius: 16px;
    padding: 6px 10px;
    font-size: 12px;
    margin: 3px;
  }
`;
