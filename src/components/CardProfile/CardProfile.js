import React, { useState } from "react";
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
  ContentWrapper,
  SeeSkills,
  MobileBio,
} from "./CardProfileStyled";

const CardProfile = () => {
  const { formatMessage } = useIntl();
  const [isShowingSkills, setIsShowingSkills] = useState(false);

  return (
    <BackgroundImage>
      <Container hasShadow={isShowingSkills}>
        <ContentWrapper>
          <Pills shouldDisplay={isShowingSkills}>
            <Pill key="js" text="Javascript" isPrimary />
            <Pill key="react" text="React" isPrimary />
            <Pill key="node" text="Node" isPrimary />
            <Pill key="vue" text="Vue" isPrimary />
            <Pill key="angular" text="Angular" isPrimary />
            <Pill key="react-native" text="React Native" isPrimary />
          </Pills>
          
          <SeeSkills onClick={() => setIsShowingSkills(!isShowingSkills)}>
            {formatMessage(
              isShowingSkills
                ? localization.hideSkills
                : localization.showSkills
            )}
          </SeeSkills>
          <MobileBio shouldDisplay>
            {formatMessage(localization.descriptionShort)}
          </MobileBio>
          <Bio>{formatMessage(localization.description)}</Bio>
          <Name>Thales Valentini</Name>
        </ContentWrapper>
        <MobileImage />
      </Container>
    </BackgroundImage>
  );
};

export default CardProfile;
