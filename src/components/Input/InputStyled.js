import styled from "styled-components";

export const Container = styled.input`
  border-radius: 15px;
  padding: 15px;
  text-decoration: none;
  outline: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  background-color: ${({ theme }) => theme.input};
  border: none;
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.text};
`;
