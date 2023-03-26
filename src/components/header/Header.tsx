import React from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

import { theme } from "../../styles/theme";

import profilePhoto from "../../assets/images/profilePhoto.jpg";
import { Box } from "../wrappers/WrapperTypes";
import { DownloadPage } from "../downloadPage/DownloadPage";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <FlexWrapper gap="1rem">
        <Avatar src={profilePhoto} alt="Deividas Kaleginas profile" />
        <Box>
          <Typography type="nameSurnameTextBold" color="white">
            Deividas Kaleginas
          </Typography>
          <Typography color="white" margin="0 0 0.25rem" type="headerTextBold">
            Front-end developer &#x1F913;
          </Typography>
          <Typography type="headerLocationTextBold" color="white">
            Vilnius - Lithuania
          </Typography>
        </Box>
      </FlexWrapper>
      <DownloadPage />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
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
