import React from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";

export const AboutMe: React.FC = () => {
  return (
    <AboutMeStyledSection>
      <Typography margin="0 0 1rem" type="sectionTitleTextBold" color="grey2">
        About Me
      </Typography>
      <Typography type="paragraphTextRegular" color="grey1">
        I'm switching my career from Senior Investigator at the Police
        department to Front-end developer. I decided to make this change because
        I've noticed that the technology field is dynamic, exciting, and full of
        interesting challenges.
        <br />
        I've been learning front-end development for about a year and feel ready
        to work in a team. I am prepared to learn much and do my best to bring
        value to your company.
      </Typography>
    </AboutMeStyledSection>
  );
};

const AboutMeStyledSection = styled.section`
  gap: 0.5rem;
  padding-bottom: 1.3125rem;
`;
