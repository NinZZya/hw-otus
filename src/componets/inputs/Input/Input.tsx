import React from "react";
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

type InputProp = React.HTMLProps<HTMLInputElement> & {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

const DefaultColor = {
  TEXT: "#ffffff",
  BACKGROUND: "#3700b3",
  SHADOW_BORDER: "rgba(255, 255, 255, 0.1)",
};

const DefaultInput = {
  WIDTH: "100%",
  HEIIGHT: "4em",
  MARGIN: "1rem 0",
  PADDING: "1rem",
};

const getStyleInput = (theme: Theme, props: InputProp): SerializedStyles => css`
  margin: ${props.margin ? props.margin : DefaultInput.MARGIN};
  padding: ${props.padding ? props.padding : DefaultInput.PADDING};
  width: ${props.width ? props.width : DefaultInput.WIDTH};
  height: ${props.height ? props.height : DefaultInput.HEIIGHT};
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

export const Input: React.FC<InputProp> = (props) => {
  const theme = useTheme();

  return <input css={getStyleInput(theme, props)} {...props} />;
};
