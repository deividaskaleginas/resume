import React from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

import { theme } from "../../styles/theme";

import profilePhoto from "../../assets/images/profilePhoto.jpg";
import { Box } from "../wrappers/WrapperTypes";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Avatar src={profilePhoto} alt="Deividas Kaleginas profile" />
      <Box>
        <Typography type="nameSurnameTextBold" color="white">
          Deividas Kaleginas
        </Typography>
        <Typography type="headerTextBold" color="white">
          Front-end developer &#x1F913;
        </Typography>
        <Typography type="headerLocationTextBold" color="white">
          Vilnius - Lithuania
        </Typography>
      </Box>
      Download as PDF
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  gap: 0.9375rem;
  padding-bottom: 1.125rem;
  border-bottom: 1px solid ${theme.colors.border};
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
`;
