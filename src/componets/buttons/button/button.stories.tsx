import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Button } from "./button";

export default {
  title: "Example/buttons/Button",
  component: Button,
} as Meta;

export const Simple: React.FC = () => <Button>Button</Button>;
