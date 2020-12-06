import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Col } from "./col";

export default {
  title: "Example/layouts/Col",
  component: Col,
} as Meta;

const style = { padding: "1rem", border: "1px dotted #000" };

export const ColWithElements: React.FC = () => (
  <Col style={style}>
    <p css={style}>Item 1</p>
    <p css={style}>Item 2</p>
  </Col>
);
