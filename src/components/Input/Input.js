import React from "react";
import PropTypes from "prop-types";
import { Container } from "./InputStyled";

const Input = (props) => {
  return <Container {...props} />;
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
