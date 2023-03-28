import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Typography } from "../typography/Typography";
import { FlexWrapper } from "../wrappers/FlexWrapper";

export const Contacts: React.FC = () => {
  return (
    <ContactsStyledBlock>
      <Typography type="sectionTitleTextBold" color="grey2">
        Contacts
      </Typography>
      <FlexWrapper flexDirection="column" gap="0.5rem">
        <FlexWrapper flexWrap="wrap" gap="0.5rem">
          <Address>
            <Typography type="contactsTextBold" color="grey1">
              Gmail:{" "}
              <a href="mailto:deividas.kaleginas@gmail.com">
                deividas.kaleginas@gmail.com
              </a>
            </Typography>
          </Address>
          <Address>
            <Typography type="contactsTextBold" color="grey1">
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/deividas-kaleginas/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/deividas-kaleginas
              </a>
            </Typography>
          </Address>
        </FlexWrapper>
        <FlexWrapper flexWrap="wrap" alignItems="flex-start" gap="1.3125rem">
          <Address>
            <Typography type="contactsTextBold" color="grey1">
              GitHub{" "}
              <a
                href="https://github.com/deividaskaleginas"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/deividaskaleginas
              </a>
            </Typography>
          </Address>
          <Address>
            <Typography type="contactsTextBold" color="grey1">
              Tel: <a href="tel:+37063011334">+370 630 11 334</a>
            </Typography>
          </Address>
        </FlexWrapper>
      </FlexWrapper>
    </ContactsStyledBlock>
  );
};

const ContactsStyledBlock = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.375rem 0 1.3125rem 0;

  a {
    color: ${theme.colors.grey1};
    text-decoration: underline;
  }
`;

const Address = styled.address`
  padding: 0.1875rem 0.25rem;
  background-color: ${theme.colors.contacts};
  border-radius: 0.3125rem;
`;
