import React from "react";
import PropTypes from "prop-types";
import { Container, Image, Title, Wrapper } from "./CardSocialStyled";

const CardSocial = ({ icon, text, color }) => {
  return (
    <Container color={color}>
      <Wrapper>
        <Image icon={icon} />
        <Title>{text}</Title>
      </Wrapper>
    </Container>
  );
};

CardSocial.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CardSocial;
