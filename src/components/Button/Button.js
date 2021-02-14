import React from "react";
import PropTypes from "prop-types";
import { Container } from "./ButtonStyled";

const Button = ({ children, onClick, isActive, type }) => {
  return (
    <Container type={type} isActive={isActive} onClick={isActive ? onClick : null}>
      {children}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  isActive: true,
  type: "button",
  onClick: () => {},
};

export default Button;
