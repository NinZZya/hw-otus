import React from "react";
/** @jsx jsx */
import { jsx, css, useTheme } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils/types";

interface Theme {
  color?: {
    text: string;
    primary: string;
    surface: string;
    shadowBorder: string;
  };
  width: string;
  height: string;
}

type FormProp = React.HTMLProps<HTMLFormElement> & {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  onSubmit?: (evt: React.FormEvent) => void;
};

const DefaultColor = {
  TEXT: "#ffffff",
  SHADOW_BORDER: "rgba(255, 255, 255, 0.1)",
  BACKGROUND: "#3700b3",
  SURFACE: "#121212",
};

const DefaultForm = {
  WIDTH: "400px",
  HEIGHT: "500px",
  PADDING: "3rem",
  MARGIN: "0",
};

const getStyleForm = (theme: Theme, props: FormProp): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  width: ${theme.width};
  height: ${theme.height};
  padding: ${props.padding ? props.padding : DefaultForm.PADDING};
  margin: ${props.margin ? props.margin : DefaultForm.PADDING};
  color: ${theme.color ? theme.color.text : DefaultColor.TEXT};
  border: 1px solid
    ${theme.color ? theme.color.shadowBorder : DefaultColor.SHADOW_BORDER};
  border-radius: 0.3rem;
  box-sizing: border-box;
  background-color: ${theme.color ? theme.color.surface : DefaultColor.SURFACE};
`;

export const Form: React.FC<FormProp> = (props) => {
  const theme: Theme = {
    ...useTheme(),
    width: props.width ? props.width : DefaultForm.WIDTH,
    height: props.height ? props.height : DefaultForm.HEIGHT,
  };

  return <form css={getStyleForm(theme, props)} {...props} />;
};
