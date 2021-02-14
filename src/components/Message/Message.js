import React from "react";
import PropTypes from "prop-types";
import MEDIA from "../../constants/media";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/email.png";
import {
  Container,
  Avatar,
  TextArea,
  Image,
  MediaIcon,
  MediaCard,
  MediaTitle,
  MediaText,
  MediaTitleTextWrapper,
  MediaWrapper,
  MediaLink,
} from "./MessageStyled";

const renderIcon = (media) => {
  switch (media.type) {
    case MEDIA.GITHUB:
      return github;
    case MEDIA.TWITTER:
      return twitter;
    case MEDIA.LINKEDIN:
      return linkedin;
    default:
      return email;
  }
};

const renderMedia = (mediaList) => {
  const medias = [];
  mediaList.forEach((m) => {
    medias.push(
      <MediaLink key={m.id} href={m.link} target="blank">
        <MediaCard>
          <MediaTitleTextWrapper>
            <MediaIcon src={renderIcon(m)} />
            <MediaTitle>{m.title}</MediaTitle>
          </MediaTitleTextWrapper>
          <MediaText>{m.content}</MediaText>
        </MediaCard>
      </MediaLink>
    );
  });
  return medias;
};

const Message = ({ isPrimary, text, hasAvatar, image, media }) => {
  const hasManyMedia = media.length > 1;
  return (
    <Container isPrimary={isPrimary}>
      {hasAvatar && <Avatar isPrimary={isPrimary} />}
      {!image.id && media.length === 0 && (
        <TextArea hasAvatar={hasAvatar} isPrimary={isPrimary}>
          {text}
        </TextArea>
      )}
      {!!image.id && (
        <Image
          src={image.content}
          hasAvatar={hasAvatar}
          isPrimary={isPrimary}
        />
      )}
      {media.length > 0 && (
        <MediaWrapper hasMany={hasManyMedia} hasAvatar={hasAvatar}>
          {renderMedia(media)}
        </MediaWrapper>
      )}
    </Container>
  );
};

Message.propTypes = {
  isPrimary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  hasAvatar: PropTypes.bool,
  media: PropTypes.array,
  image: PropTypes.object,
};

Message.defaultProps = {
  isPrimary: false,
  text: "",
  hasAvatar: false,
  media: [],
  image: {},
};

export default Message;
