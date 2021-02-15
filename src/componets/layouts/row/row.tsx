import React, { Children, FC } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils/types";

interface RowProp {
  [key: string]: string | undefined | Element[] | React.ReactNode[];
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
}

const DefaultStyle = {
  JUSTIFY_CONTENT: "space-around",
  ALIGIN_ITEMS: "center",
  MARGIN: "0",
  PADDING: "1rem",
};

const getRowStyle = (style: RowProp): SerializedStyles => css`
  display: flex;
  flex-direction: column;
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

export const Row: FC<RowProp> = (props) => {
  return (
    <div css={getRowStyle(props)}>
      {Children.map(props.children, (child) => child)}
    </div>
  );
};
