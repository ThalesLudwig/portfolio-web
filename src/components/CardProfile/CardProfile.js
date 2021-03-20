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
          <Pill key="node" text="Node" isPrimary />
          <Pill key="vue" text="Vue" isPrimary />
          <Pill key="angular" text="Angular" isPrimary />
          <Pill key="react-native" text="React Native" isPrimary />
        </Pills>
        <Bio>{formatMessage(localization.description)}</Bio>
        <Name>Thales Valentini</Name>
        <MobileImage />
      </Container>
    </BackgroundImage>
  );
};

export default CardProfile;
