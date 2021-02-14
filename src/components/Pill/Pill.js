import React from "react";
import PropTypes from "prop-types";
import { Container } from "./PillStyled";

const Pill = ({ isPrimary, text, clickable, onClick }) => {
  return (
    <Container isPrimary={isPrimary} clickable={clickable} onClick={onClick}>
      {text}
    </Container>
  );
};

Pill.propTypes = {
  isPrimary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
};

Pill.defaultProps = {
  isPrimary: false,
  text: "",
  clickable: false,
  onClick: () => {},
};

export default Pill;
