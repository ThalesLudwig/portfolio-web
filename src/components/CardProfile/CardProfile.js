import React from "react";
import Pill from "../Pill/Pill";
import localization from "./localization";
import { useIntl } from "react-intl";
import {
  Container,
  BackgroundImage,
  Name,
  Bio,
  Pills,
  MobileImage,
} from "./CardProfileStyled";

const CardProfile = () => {
  const { formatMessage } = useIntl();

  return (
    <BackgroundImage>
      <Container>
        <Pills>
          <Pill key="js" text="Javascript" isPrimary />
          <Pill key="react" text="React" isPrimary />
          <Pill key="node" text="NodeJS" isPrimary />
          <Pill key="vue" text="VueJS" isPrimary />
          <Pill key="swift" text="Swift" isPrimary />
          <Pill key="ui" text="UI/UX" isPrimary />
        </Pills>
        <Bio>{formatMessage(localization.description)}</Bio>
        <Name>Thales Valentini</Name>
        <MobileImage />
      </Container>
    </BackgroundImage>
  );
};

export default CardProfile;
