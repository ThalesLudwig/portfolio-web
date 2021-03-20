import React from "react";
import PropTypes from "prop-types";
import { Container } from "./InputStyled";

const Input = React.forwardRef((props, ref) => {
  return <Container ref={ref} {...props} />;
});

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
