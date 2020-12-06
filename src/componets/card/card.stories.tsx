import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Card } from "./card";

export default {
  title: "Example/Card",
  component: Card,
} as Meta;

export const EmptyCard: React.FC = () => <Card />;

export const CardWithItems: React.FC = () => (
  <Card style={{ color: "#fff" }}>
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
  </Card>
);
