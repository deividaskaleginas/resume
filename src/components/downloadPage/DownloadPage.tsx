import React from "react";

import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { theme } from "../../styles/theme";
import DownloadCV from "../../assets/downloads/DeividasKaleginasCV.pdf";

export const DownloadPage: React.FC = () => (
  <DownloadButtonStyled as="a" href={DownloadCV}>
    <Typography type="buttonTextBold" color="grey1">
      Download as PDF
    </Typography>
  </DownloadButtonStyled>
);

const DownloadButtonStyled = styled.button`
  border: none;
  border-radius: 0.3125rem;
  border: 2px solid ${theme.colors.grey1};
  padding: 0.125rem 0.6875rem;
  background-color: transparent;
  cursor: pointer;
`;
