import React, { FC } from "react";
/** @jsx jsx */
import { jsx, css, useTheme } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils/types";

interface Theme {
  color?: {
    text: string;
    secondary: string;
    shadowBorder: string;
  };
}

interface InputProp {
  [key: string]: string | boolean | undefined;
}

const DefaultColor = {
  TEXT: "#ffffff",
  BACKGROUND: "#3700b3",
  SHADOW_BORDER: "rgba(255, 255, 255, 0.1)",
};

const getStyleInput = (theme: Theme): SerializedStyles => css`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  border: 1px solid
    ${theme.color ? theme.color.shadowBorder : DefaultColor.SHADOW_BORDER};
  box-sizing: border-box;
  background-color: ${theme.color
    ? theme.color.secondary
    : DefaultColor.SHADOW_BORDER};
  color: ${theme.color ? theme.color.text : DefaultColor.TEXT};

  &:focus,
  &:hover,
  &:active,
  &:selected {
    border: 1px solid
      ${theme.color ? theme.color.shadowBorder : DefaultColor.SHADOW_BORDER};
    box-shadow: 0px 0px 5px 1px
      ${theme.color ? theme.color.shadowBorder : DefaultColor.SHADOW_BORDER};
  }
`;

export const Input: FC<InputProp> = (props) => {
  const theme = useTheme();

  return <input css={getStyleInput(theme)} {...props} />;
};
