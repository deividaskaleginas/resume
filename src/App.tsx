import React from "react";
import styled from "styled-components";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Contacts } from "./components/contacts/Contacts";
import { Header } from "./components/header/Header";
import GlobalStyles from "./styles/global";

const App: React.FC = () => {
  return (
    <Main>
      <GlobalStyles />
      <Header />
      <Contacts />
      <AboutMe />
    </Main>
  );
};

export default App;

const Main = styled.main`
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem;
`;
