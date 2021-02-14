import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme, isActive }) => isActive ? theme.primary : theme.grey };
  color: ${({ theme }) => theme.white};
  border-radius: 15px;
  padding: 15px;
  outline: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  border: none;
  width: max-content;
  cursor: ${({ isActive }) => isActive ? "pointer" : "default" };

  &:hover {
    box-shadow: 0 0.5em 0.5em -0.4em ${({ theme, isActive }) => isActive ? theme.primary : theme.card };
    transform: translateY(-0.25em);
    transition: 0.3s;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0.25em);
    transition: 0.3s;
  }

`;
