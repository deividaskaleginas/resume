export interface TypographyThemeType {
  fontFamily: FontFamily;
  nameSurnameTextBold: TextStyleParams;
  headerTextBold: TextStyleParams;
  headerLocationTextBold: TextStyleParams;
  sectionTitleTextBold: TextStyleParams;
  contactsTextBold: TextStyleParams;
  titleTextBold: TextStyleParams;
  paragraphTextRegular: TextStyleParams;
  experientsTitleTextBold: TextStyleParams;
  experientsHeaderTextBold: TextStyleParams;
  experientsTextBold: TextStyleParams;
  experientsTextRegular: TextStyleParams;
  buttonTextBold: TextStyleParams;
}

export interface FontFamily {
  regular: string;
}

export interface TextStyleParams {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}

export const typography: TypographyThemeType = {
  fontFamily: {
    regular: "Poppins",
  },
  nameSurnameTextBold: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: "1.875rem",
  },
  headerTextBold: {
    fontSize: "0.75rem",
    fontWeight: 500,
    lineHeight: "1.125rem",
  },
  headerLocationTextBold: {
    fontSize: "0.5rem",
    fontWeight: 500,
    lineHeight: "0.75rem",
  },
  sectionTitleTextBold: {
    fontSize: "0.6875rem",
    fontWeight: 500,
    lineHeight: "1.0313rem",
  },
  contactsTextBold: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
  },
  titleTextBold: {
    fontSize: "0.9375rem",
    fontWeight: 500,
    lineHeight: "1.4063rem",
  },
  paragraphTextRegular: {
    fontSize: "0.625rem",
    fontWeight: 400,
    lineHeight: "0.9375rem",
  },
  experientsTitleTextBold: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: "1.3125rem",
  },
  experientsHeaderTextBold: {
    fontSize: "0.6875rem",
    fontWeight: 500,
    lineHeight: "1.0313rem",
  },
  experientsTextBold: {
    fontSize: "0.5625rem",
    fontWeight: 600,
    lineHeight: "0.75rem",
  },
  experientsTextRegular: {
    fontSize: "0.5625rem",
    fontWeight: 400,
    lineHeight: "0.75rem",
  },
  buttonTextBold: {
    fontSize: "0.5rem",
    fontWeight: 500,
    lineHeight: "0.75rem",
  },
};
