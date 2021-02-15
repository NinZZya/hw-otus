import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils/types";

interface ColProp {
  [key: string]: string | undefined | Element[] | React.ReactNode[];
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
}

const DefaultStyle = {
  JUSTIFY_CONTENT: "start",
  ALIGIN_ITEMS: "start",
  MARGIN: "0",
  PADDING: "1rem",
};

const getColStyle = (style: ColProp): SerializedStyles => css`
  display: flex;
  justify-content: ${style.justifyContent
    ? style.justifyContent
    : DefaultStyle.JUSTIFY_CONTENT};
  align-items: ${style.alignItems
    ? style.alignItems
    : DefaultStyle.ALIGIN_ITEMS};
  width: 100%;
  height: 100%;
  margin: ${style.margin ? style.margin : DefaultStyle.MARGIN};
  padding: ${style.padding ? style.padding : DefaultStyle.PADDING};
  box-sizing: border-box;
`;

export const Col: React.FC<ColProp> = (props) => {
  return (
    <div css={getColStyle(props)}>
      {React.Children.map(props.children, (child) => child)}
    </div>
  );
};
