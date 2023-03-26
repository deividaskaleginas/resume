import { ReactNode } from "react";
import { Property } from "csstype";

import styled, { css } from "styled-components";

import { Colors } from "../../styles/colors";
import { theme } from "../../styles/theme";

export type TypographyTypes = keyof typeof TypographyHtmlTag;

enum TypographyHtmlTag {
  "nameSurnameTextBold" = "h1",
  "headerTextBold" = "h2",
  "headerLocationTextBold" = "h3",
  "sectionTitleTextBold" = "h4",
  "contactsTextBold" = "p",
  "titleTextBold" = "p",
  "paragraphTextRegular" = "p",
  "experientsTitleTextBold" = "h1",
  "experientsHeaderTextBold" = "h2",
  "experientsTextBold" = "h3",
  "experientsTextRegular" = "h4",
  "buttonTextBold" = "p",
}

//NOTE: extends - TypographyProps pasipildo TextStyles propsais
interface TypographyProps extends TextStyles {
  children: ReactNode | ReactNode[];
}

interface TextStyles {
  type?: TypographyTypes;
  color?: Colors;
  margin?: string;
  textAlign?: Property.TextAlign;
  numberOfLines?: number;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  type = "paragraphTextRegular",
  color,
  ...props
}) => {
  return (
    <TextStyled
      as={TypographyHtmlTag[type]}
      type={type}
      color={color}
      {...props}
    >
      {children}
    </TextStyled>
  );
};

const TextStyled = styled.h1<TextStyles>`
  ${({ color, type, margin, textAlign, numberOfLines }) => css`
    margin: ${margin || 0};
    text-align: ${textAlign || "start"};
    color: ${color ? theme.colors[color] : theme.colors.grey1};
    font-size: ${type
      ? theme.typography[type].fontSize
      : theme.typography.paragraphTextRegular.fontSize};
    font-weight: ${type
      ? theme.typography[type].fontWeight
      : theme.typography.paragraphTextRegular.fontWeight};
    line-height: ${type
      ? theme.typography[type].lineHeight
      : theme.typography.paragraphTextRegular.lineHeight};
    -webkit-line-clamp: ${numberOfLines ? numberOfLines : "none"};
    -webkit-box-orient: ${numberOfLines ? "vertical" : "inline-axis"};
    display: ${numberOfLines ? "-webkit-box" : "?"};
    overflow: ${numberOfLines ? "hidden" : "visible"};
  `}
`;
