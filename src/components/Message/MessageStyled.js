import styled from "styled-components";
import avatar from "../../assets/avatar.jpeg";
import profile from "../../assets/profile_crop.jpg";

export const Container = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  flex-direction: ${({ isPrimary }) => (isPrimary ? "row" : "row-reverse")};
`;

export const Avatar = styled.div`
  background: ${({ theme }) => theme.grey};
  background-image: ${({ isPrimary }) =>
    isPrimary ? `url(${profile})` : `url(${avatar})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 42px;
  min-width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const TextArea = styled.div`
  background: ${({ isPrimary, theme }) =>
    isPrimary ? theme.primary : theme.grey};
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme, isPrimary }) => (isPrimary ? theme.white : theme.title)};
  border-radius: 20px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  min-height: 32px;
  margin-left: ${({ hasAvatar, isPrimary }) =>
    !hasAvatar && isPrimary ? "52px" : "10px"};
  margin-right: ${({ hasAvatar, isPrimary }) =>
    !hasAvatar && !isPrimary ? "52px" : "10px"};
`;

export const Image = styled.div`
  background: ${({ isPrimary, theme }) =>
    isPrimary ? theme.primary : theme.grey};
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 335px;
  height: 200px;
  border-radius: 20px;
  margin-left: ${({ hasAvatar, isPrimary }) =>
    !hasAvatar && isPrimary ? "52px" : "10px"};
  margin-right: ${({ hasAvatar, isPrimary }) =>
    !hasAvatar && !isPrimary ? "52px" : "10px"};
`;

export const MediaLink = styled.a`
  text-decoration: none;
`

export const MediaIcon = styled.div`
  background: ${({ theme }) => theme.grey};
  background: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 29px;
  height: 29px;
  min-width: 29px;
  border-radius: 20px;
  margin-right: 7px;
`;

export const MediaCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.secondary};
  width: 160px;
  height: 100px;
  border-radius: 20px;
  padding: 10px;
  margin: 0px 5px 5px 0px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.secondaryAlt};
  }
`;

export const MediaTitle = styled.div`
  font-weight: normal;
  color: ${({ theme }) => theme.title};
  display: flex;
  align-items: center;
`;

export const MediaText = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

export const MediaTitleTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 9px;
`;

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: ${({ hasAvatar }) => !hasAvatar ? "52px" : "10px"};
  flex-wrap: wrap;
`;