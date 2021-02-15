import React from "react";
/** @jsx jsx */
import { jsx, css, useTheme } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils/types";

interface Theme {
  color?: {
    text: string;
    primary: string;
    border: string;
    shadowBorder: string;
  };
}

type ButtonProp = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const DefaultColor = {
  TEXT: "#ffffff",
  BACKGROUND: "#3700b3",
  SHADOW_BORDER: "rgba(255, 255, 255, 0.1)",
};

const getButtonStyle = (theme: Theme): SerializedStyles => css`
  display: inline-block;
  padding: 1rem;
  font-weight: 700;
  border-radius: 0.3em;
  cursor: pointer;
  line-height: 1;
  text-decoration: none;
  border: 1px solid transparent;
  color: ${theme.color ? theme.color.text : DefaultColor.TEXT};
  background-color: ${theme.color
    ? theme.color.primary
    : DefaultColor.BACKGROUND};

  &:focus,
  &:hover {
    outline: none;
    transperent: 0.4;
    border: 1px solid
      ${theme.color ? theme.color.shadowBorder : DefaultColor.SHADOW_BORDER};
    box-shadow: 0px 0px 5px 1px
      ${theme.color ? theme.color.shadowBorder : DefaultColor.SHADOW_BORDER};
  }

  &:disabled {
    background-color: ${theme.color
      ? theme.color.shadowBorder
      : DefaultColor.SHADOW_BORDER};
  }
`;

export const Button: React.FC<ButtonProp> = (props) => {
  const theme = useTheme();

  return <button css={getButtonStyle(theme)} {...props} />;
};
