import React from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

import codeAcademy from "../../assets/images/codeAcademy.png";
import vilniusCodingSchool from "../../assets/images/vilniusCodingSchool.png";
import mruLogo from "../../assets/images/mruLogo.png";

export const Education: React.FC = () => {
  return (
    <EducationStyledSection>
      <Typography type="sectionTitleTextBold" color="grey2">
        Education
      </Typography>
      <FlexWrapper flexDirection="column" gap="0.75rem">
        <FlexWrapper flexDirection="column" gap="0.5rem">
          <FlexWrapper gap="0.5rem">
            <FlexWrapper>
              <img src={codeAcademy} alt="Coding school Codeacademy logo" />
            </FlexWrapper>
            <FlexWrapper flexDirection="column">
              <Typography type="experientsTitleTextBold" color="grey1">
                FRONT-END DEVELOPMENT
              </Typography>
              <Typography type="experientsHeaderTextBold" color="grey1">
                Code Academy Nov 2022 - Feb 2023
              </Typography>
              <Typography type="experientsTextRegular" color="grey1">
                4-month Front-end development course (560 hours), which
                includes: - 120 hours of HTML, CSS. - 200 hours of JavaSript. -
                40 hours of Git. - 200 hours of React.js.
              </Typography>
              <FlexWrapper gap="0.3125rem">
                <Typography type="experientsTextBold" color="grey1">
                  Skils:
                </Typography>
                <Typography type="experientsTextRegular" color="grey1">
                  HTML · Cascading Style Sheets (CSS) · JavaScript · React.js ·
                  SASS · styled-components
                </Typography>
              </FlexWrapper>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper gap="0.5rem">
            <FlexWrapper>
              <img src={vilniusCodingSchool} alt="Vilnius Coding school logo" />
            </FlexWrapper>
            <FlexWrapper flexDirection="column">
              <Typography type="experientsTitleTextBold" color="grey1">
                COMPUTER PROGRAMMING
              </Typography>
              <Typography type="experientsHeaderTextBold" color="grey1">
                Vilnius Coding School Mar 2021 - May 2021
              </Typography>
              <Typography type="experientsTextRegular" color="grey1">
                90 hours programming course for beginners. During this course I
                get to know these languages: - 30 hours of C# basics; - 30 hours
                of JAVA basics; - 30 hours of Web basics: HTML, CSS, JavaSript.
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
          <FlexWrapper gap="0.5rem">
            <FlexWrapper>
              <img src={mruLogo} alt="Mykolas Romeris University logo" />
            </FlexWrapper>
            <FlexWrapper flexDirection="column">
              <Typography type="experientsTitleTextBold" color="grey1">
                LAW
              </Typography>
              <Typography type="experientsHeaderTextBold" color="grey1">
                Mykolas Romeris University Sep 2011 - Jan 2015
              </Typography>
              <Typography type="experientsTextRegular" color="grey1">
                Bachelor's degreen, Law
              </Typography>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </EducationStyledSection>
  );
};

const EducationStyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.7188rem;
  padding-bottom: 1.3125rem;

  img {
    height: 2.5rem;
    width: 2.5rem;
    object-fit: cover;
    border-radius: 3.125rem;
  }
`;
