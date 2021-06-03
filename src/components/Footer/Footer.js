import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import coffee from "../../assets/coffee.jpeg";
import instagram from "../../assets/instagram.jpg";
import localization from "./localization";
import { useIntl } from "react-intl";
import {
  Container,
  Label,
  Bold,
  Triangle,
  SocialRow,
  Link,
  SocialIcon,
  Aiden,
} from "./FooterStyled";

const getThemeName = ({ value }, formatMessage) => {
  if (value === 0) return formatMessage(localization.lightMode);
  return formatMessage(localization.darkMode);
};

const Footer = ({ onThemeSelection, theme }) => {
  const { formatMessage } = useIntl();

  return (
    <Container>
      <Label onClick={onThemeSelection}>
        <Bold>{getThemeName(theme, formatMessage)}</Bold>
      </Label>
      <SocialRow>
        <Link href="https://twitter.com/ThalesLudwig" target="blank">
          <SocialIcon icon={twitter} />
        </Link>
        <Link href="https://github.com/ThalesLudwig" target="blank">
          <SocialIcon icon={github} />
        </Link>
        <Link href="https://www.linkedin.com/in/thalesludwig/" target="blank">
          <SocialIcon icon={linkedin} />
        </Link>
        <Link href="https://www.buymeacoffee.com/thalesludwig" target="blank">
          <SocialIcon icon={coffee} />
        </Link>
        <Link href="https://www.instagram.com/thalesludwig/" target="blank">
          <SocialIcon icon={instagram} />
        </Link>
        <Link href="mailto:thales.ludwig@gmail.com">
          <SocialIcon icon={email} />
        </Link>
      </SocialRow>
      <Link href="https://github.com/ThalesLudwig/aiden" target="blank">
        <Aiden>
          Powered by{" "}
          <Bold>
            <Triangle>▼</Triangle>AIDEN
          </Bold>
        </Aiden>
      </Link>
    </Container>
  );
};

Footer.prototypes = {
  onThemeSelection: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

const mapStateToProps = (store) => ({
  theme: store.theme,
});

export default connect(mapStateToProps)(Footer);
