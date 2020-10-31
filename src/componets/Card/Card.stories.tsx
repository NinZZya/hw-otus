import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

export const EmptyCard: React.FC = () => <Card />;
export const CardWithContent: React.FC = () => <Card>Content</Card>;
