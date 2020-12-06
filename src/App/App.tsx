import React from "react";
/** @desc desc */
import { ThemeProvider } from "@emotion/react";
import { Global, css } from "@emotion/core";
import darkTheme from "../themes/dark";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Global
        styles={css`
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            background-color: ${darkTheme.color.background};
            color: ${darkTheme.color.text};
            box-sizing: border-box;
            font-family: ${darkTheme.font.family};
            font-size: ${darkTheme.font.size};
            line-height: ${darkTheme.font.lineHeight};
          }
        `}
      />
      <div>Hello World</div>
    </ThemeProvider>
  );
};
