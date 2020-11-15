import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
/** @desc jsx */
import { Global, css } from "@emotion/core";

ReactDOM.render(
  <>
    <Global
      styles={css`
        body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: #000;
          color: #fff;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
          font-size: 14px;
          line-height: 24px;
        }
      `}
    />
    <App />
  </>,
  document.getElementById("root")
);
