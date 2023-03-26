import React from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

import { theme } from "../../styles/theme";
import {
  PACKAGES,
  PROGRAMING_LANGUAGES,
} from "../../constants/techStackConstants";
import { Colors } from "../../styles/colors";

export const TechnicalStack: React.FC = () => {
  return (
    <TechnicalStackStyledSection>
      <Typography type="sectionTitleTextBold" color="grey2">
        Technical Stack
      </Typography>
      <FlexWrapper flexDirection="column" gap="1rem">
        <FlexWrapper flexWrap="wrap" gap="1rem">
          {PROGRAMING_LANGUAGES.map(({ logo, text }, index) => (
            <TechStackSkill background="red" key={index}>
              <img src={logo} alt="HTML icon" />{" "}
              <Typography type="buttonTextBold" color="white">
                {text}
              </Typography>
            </TechStackSkill>
          ))}
        </FlexWrapper>
        <FlexWrapper flexWrap="wrap" gap="1rem">
          {PACKAGES.map(({ logo, text }, index) => (
            <TechStackSkill background="purple" key={index}>
              <img src={logo} alt="HTML icon" />{" "}
              <Typography type="buttonTextBold" color="white">
                {text}
              </Typography>
            </TechStackSkill>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </TechnicalStackStyledSection>
  );
};

const TechnicalStackStyledSection = styled.section`
  display: grid;
  grid-gap: 0.5625rem;
`;

const TechStackSkill = styled.div<{ background: Colors }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.6875rem;
  border-radius: 0.3125rem;
  background-color: ${({ background }) => theme.colors[background]};
`;
