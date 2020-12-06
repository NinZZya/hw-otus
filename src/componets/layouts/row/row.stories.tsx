import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Row } from "./row";

export default {
  title: "Example/layouts/Row",
  component: Row,
} as Meta;

const style = { padding: "1rem", border: "1px dotted #000" };

export const RowWithElements: React.FC = () => (
  <Row style={style}>
    <p css={style}>Item 1</p>
    <p css={style}>Item 2</p>
  </Row>
);
