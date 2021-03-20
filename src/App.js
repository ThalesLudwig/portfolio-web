import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import CardProfile from "./components/CardProfile/CardProfile";
import CardMain from "./components/CardMain/CardMain";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Pill from "./components/Pill/Pill";
import Message from "./components/Message/Message";
import Footer from "./components/Footer/Footer";
import { setDarkTheme, setLightTheme } from "./config/themeSlice";
import { setEnglish, setPortuguese } from "./config/locationSlice";
import { dark, light } from "./theme";
import usaFlag from "./assets/usa_flag.png";
import brazilFlag from "./assets/brazil_flag.png";
import LANG from "./constants/lang";
import { useIntl } from "react-intl";
import localization from "./localization";
import MessageService from "./services/messageService";
import messageParser from "./helpers/messageParser";
import loadingMessage from "./helpers/loadingMessage";
import {
  GlobalStyle,
  Container,
  InputWrapper,
  GoButtonWrapper,
  SuggestionsWrapper,
  Chat,
  ProfileWrapper,
  Flag,
  FlagRow,
  ContainerWrapper,
} from "./AppStyled";

const printMessages = (messages) => {
  const messageList = [];
  messages.forEach((message) => {
    messageList.push(
      <Message
        key={message.id}
        isPrimary={message.isPrimary}
        hasAvatar={message.hasAvatar}
        text={message.text}
        media={message.media}
        image={message.image}
      />
    );
  });
  return messageList;
};

const submitForm = (
  event,
  text,
  setInput,
  messageList,
  setMessages,
  setIsLoading
) => {
  event.preventDefault();
  if (text.trim().length > 0) {
    const lastMessage = messageList[messageList.length - 1];
    const inputMessage = {
      id: new Date().getTime(),
      text: text.trim(),
      isPrimary: false,
      hasAvatar: lastMessage.isPrimary,
    };
    setMessages(messageList.concat(inputMessage));
    setInput("");
    setIsLoading(true);
    MessageService.errorResponse()
      .then((res) => {
        const message = messageParser(res.data.content);
        setMessages(messageList.concat(inputMessage).concat(message));
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }
};

const App = ({
  theme,
  location,
  setDarkTheme,
  setLightTheme,
  setEnglish,
  setPortuguese,
}) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { formatMessage } = useIntl();

  useEffect(() => {
    setIsLoading(true);
    MessageService.greeting()
      .then((res) => {
        const messages = messageParser(res.data.content);
        setMessages(messages);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ThemeProvider theme={!!theme ? light : dark}>
      <GlobalStyle />
      <ContainerWrapper>
        <Container>
          <CardMain>
            <form onSubmit={(e) => submitForm(e, input, setInput, messages, setMessages, setIsLoading)}>
              <FlagRow>
                <Flag icon={usaFlag} isActive={location === LANG.EN} onClick={() => setEnglish()}/>
                <Flag icon={brazilFlag} isActive={location === LANG.BR} onClick={() => setPortuguese()}/>
              </FlagRow>
              <Chat debug={false}>
                {printMessages(messages)}
                <>{isLoading && <Message {...loadingMessage} />}</>
              </Chat>
              <InputWrapper>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target)}
                  placeholder={formatMessage(localization.askMeAnything)}
                />
                <GoButtonWrapper>
                  <Button type="submit" isActive={input.trim().length > 0}>
                    {formatMessage(localization.send)}
                  </Button>
                </GoButtonWrapper>
              </InputWrapper>
              <SuggestionsWrapper>
                <Pill
                  key="education"
                  text={formatMessage(localization.education)}
                  clickable
                  onClick={() =>
                    setInput(
                      `${input} ${formatMessage(localization.education)}`
                    )
                  }
                />
                <Pill
                  key="career"
                  text={formatMessage(localization.career)}
                  clickable
                  onClick={() =>
                    setInput(`${input} ${formatMessage(localization.career)}`)
                  }
                />
                <Pill
                  key="projects"
                  text={formatMessage(localization.projects)}
                  clickable
                  onClick={() =>
                    setInput(`${input} ${formatMessage(localization.projects)}`)
                  }
                />
                <Pill
                  key="personal"
                  text={formatMessage(localization.personal)}
                  clickable
                  onClick={() =>
                    setInput(`${input} ${formatMessage(localization.personal)}`)
                  }
                />
                <Pill
                  key="trivia"
                  text={formatMessage(localization.trivia)}
                  clickable
                  onClick={() =>
                    setInput(`${input} ${formatMessage(localization.trivia)}`)
                  }
                />
                <Pill
                  key="skills"
                  text={formatMessage(localization.skills)}
                  clickable
                  onClick={() =>
                    setInput(`${input} ${formatMessage(localization.skills)}`)
                  }
                />
                <Pill
                  key="contact"
                  text={formatMessage(localization.contact)}
                  clickable
                  onClick={() =>
                    setInput(`${input} ${formatMessage(localization.contact)}`)
                  }
                />
              </SuggestionsWrapper>
            </form>
          </CardMain>
          <ProfileWrapper>
            <CardProfile />
          </ProfileWrapper>
        </Container>
      </ContainerWrapper>
      <Footer onThemeSelection={() => (!!theme ? setDarkTheme() : setLightTheme())}/>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme.value,
    location: state.location.value,
  };
};

const mapDispatchToProps = {
  setDarkTheme,
  setLightTheme,
  setEnglish,
  setPortuguese,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
