import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Input } from "./input";

export default {
  title: "Example/inputs/Input",
  component: Input,
} as Meta;

export const EmptyInput: React.FC = () => <Input />;
export const PasswordInput: React.FC = () => <Input type="password" />;
export const NumberInput: React.FC = () => <Input type="number" />;
