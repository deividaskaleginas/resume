import React from "react";
import styled from "styled-components";
import { AboutMe } from "./components/aboutMe/AboutMe";
import { Contacts } from "./components/contacts/Contacts";
import { Education } from "./components/education/Education";
import { Header } from "./components/header/Header";
import { TechnicalStack } from "./components/technicalStack/TechnicalStack";
import GlobalStyles from "./styles/global";

const App: React.FC = () => {
  return (
    <Main>
      <GlobalStyles />
      <Header />
      <Contacts />
      <AboutMe />
      <Education />
      <TechnicalStack />
    </Main>
  );
};

export default App;

const Main = styled.main`
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem;
`;
