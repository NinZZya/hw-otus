import React, { FC } from "react";
/** @jsx jsx */
import { jsx, css, useTheme } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils/types";

interface Theme {
  color?: {
    text: string;
    surface: string;
    border: string;
  };
}

interface ButtonProp {
  [key: string]: string | boolean | undefined;
}

const DefaultColor = {
  TEXT: "#ffffff",
  SURFACE: "#121212",
  BORDER: "#111111",
};

const getCardStyle = (theme: Theme): SerializedStyles => css`
  padding: 1rem;
  color: ${theme.color ? theme.color.text : DefaultColor.TEXT},
  background-color: ${theme.color ? theme.color.surface : DefaultColor.TEXT};
  border: 1px solid  ${theme.color ? theme.color.border : DefaultColor.BORDER};
  border-radius: 0.3rem;
  width: 100%;
  margin: 0.5rem;
  box-sizing: border-box;
`;

export const Card: FC<ButtonProp> = (props) => {
  const theme = useTheme();

  return <div css={getCardStyle(theme)} {...props} />;
};
