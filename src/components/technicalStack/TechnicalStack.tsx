import React from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

import { theme } from "../../styles/theme";
import {
  PACKAGES,
  PROGRAMING_LANGUAGES,
} from "../../constants/techStackConstants";

export const TechnicalStack: React.FC = () => {
  return (
    <TechnicalStackStyledSection>
      <Typography type="sectionTitleTextBold" color="grey2">
        Technical Stack
      </Typography>
      <FlexWrapper flexDirection="column" gap="1rem">
        <FlexWrapper gap="1rem">
          {PROGRAMING_LANGUAGES.map(({ logo, text }) => (
            <ProgramingLanguageStyledBlock>
              <img src={logo} alt="HTML icon" />{" "}
              <Typography type="buttonTextBold" color="white">
                {text}
              </Typography>
            </ProgramingLanguageStyledBlock>
          ))}
        </FlexWrapper>
        <FlexWrapper gap="1rem">
          {PACKAGES.map(({ logo, text }) => (
            <PackageStyledBlock>
              <img src={logo} alt="HTML icon" />{" "}
              <Typography type="buttonTextBold" color="white">
                {text}
              </Typography>
            </PackageStyledBlock>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </TechnicalStackStyledSection>
  );
};

const TechnicalStackStyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5625rem;
`;

const ProgramingLanguageStyledBlock = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem 0.6875rem;
  border-radius: 0.3125rem;
  background-color: ${theme.colors.red};
`;
const PackageStyledBlock = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem 0.6875rem;
  border-radius: 0.3125rem;
  background-color: ${theme.colors.purple};
`;
