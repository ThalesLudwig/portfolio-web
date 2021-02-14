import React, { useState, useEffect } from "react";
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
import store from "./config/store";
import { dark, light } from "./theme";
import usaFlag from "./assets/usa_flag.png";
import brazilFlag from "./assets/brazil_flag.png";
import LANG from "./constants/lang";
import { useIntl } from "react-intl";
import { LANGUAGE } from "./lang";
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

const App = () => {
  const { theme, location } = store.getState();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(theme.value);
  const [language, setLanguage] = useState(location.value);
  const [isLoading, setIsLoading] = useState(false);
  const { formatMessage } = useIntl();

  useEffect(() => {
    selectedTheme
      ? store.dispatch(setLightTheme())
      : store.dispatch(setDarkTheme());
    language === LANGUAGE.EN_US
      ? store.dispatch(setEnglish())
      : store.dispatch(setPortuguese());
  }, [selectedTheme, language]);

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
    <ThemeProvider theme={selectedTheme ? light : dark}>
      <GlobalStyle />
      <Container>
        <CardMain>
          <form
            onSubmit={(e) =>
              submitForm(
                e,
                input,
                setInput,
                messages,
                setMessages,
                setIsLoading
              )
            }
          >
            <FlagRow>
              <Flag
                icon={usaFlag}
                isActive={language === LANG.EN}
                onClick={() => setLanguage(LANG.EN)}
              />
              <Flag
                icon={brazilFlag}
                isActive={language === LANG.BR}
                onClick={() => setLanguage(LANG.BR)}
              />
            </FlagRow>
            <Chat debug={false}>
              {printMessages(messages)}
              <>{isLoading && <Message {...loadingMessage} />}</>
            </Chat>
            <InputWrapper>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
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
                onClick={() => setInput(`${input} Education`)}
              />
              <Pill
                key="career"
                text={formatMessage(localization.career)}
                clickable
                onClick={() => setInput(`${input} Career`)}
              />
              <Pill
                key="projects"
                text={formatMessage(localization.projects)}
                clickable
                onClick={() => setInput(`${input} Projects`)}
              />
              <Pill
                key="personal"
                text={formatMessage(localization.personal)}
                clickable
                onClick={() => setInput(`${input} Personal`)}
              />
              <Pill
                key="trivia"
                text={formatMessage(localization.trivia)}
                clickable
                onClick={() => setInput(`${input} Trivia`)}
              />
              <Pill
                key="skills"
                text={formatMessage(localization.skills)}
                clickable
                onClick={() => setInput(`${input} Skills`)}
              />
              <Pill
                key="contact"
                text={formatMessage(localization.contact)}
                clickable
                onClick={() => setInput(`${input} Contact`)}
              />
            </SuggestionsWrapper>
          </form>
        </CardMain>
        <ProfileWrapper>
          <CardProfile />
        </ProfileWrapper>
      </Container>
      <Footer onThemeSelection={() => setSelectedTheme(!selectedTheme)} />
    </ThemeProvider>
  );
};

export default App;
