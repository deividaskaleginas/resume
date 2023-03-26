import React from "react";
import styled from "styled-components";
import { Header } from "./components/header/Header";
import GlobalStyles from "./styles/global";

const App: React.FC = () => {
  return (
    <Main>
      <GlobalStyles />
      <Header />
    </Main>
  );
};

export default App;

const Main = styled.main`
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem;
`;
