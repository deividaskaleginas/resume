import React from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

import { theme } from "../../styles/theme";

import profilePhoto from "../../assets/images/profilePhoto.jpg";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <FlexWrapper>
        <img src={profilePhoto} alt="Deividas Kaleginas profile" />
      </FlexWrapper>
      <FlexWrapper flexDirection="column">
        <Typography type="nameSurnameTextBold" color="white">
          Deividas Kaleginas
        </Typography>
        <Typography type="headerTextBold" color="white">
          Front-end developer &#x1F913;
        </Typography>
        <Typography type="headerLocationTextBold" color="white">
          Vilnius - Lithuania
        </Typography>
      </FlexWrapper>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  padding-bottom: 1.125rem;
  border-bottom: 1px solid ${theme.colors.border};

  img {
    width: 62px;
    height: 62px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
