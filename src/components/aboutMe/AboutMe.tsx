import React from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";

export const AboutMe: React.FC = () => {
  return (
    <AboutMeStyledSection>
      <Typography type="sectionTitleTextBold" color="grey2">
        About Me
      </Typography>
      <Typography type="titleTextBold" color="grey1">
        Hello{" "}
      </Typography>
      <Typography type="paragraphTextRegular" color="grey1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci
        accusamus quasi, esse, voluptatibus fuga inventore neque ad molestiae
        nihil fugit dolores perspiciatis laborum totam culpa voluptates
        aspernatur nostrum. Expedita!
      </Typography>
    </AboutMeStyledSection>
  );
};

const AboutMeStyledSection = styled.section`
  padding-bottom: 1.3125rem;
`;
