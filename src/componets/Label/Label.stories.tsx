import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Label, LabelProp } from "./Label";

export default {
  title: "Components/Label",
  component: Label,
} as Meta;

export const LabelWithText: React.FC<LabelProp> = () => <Label value="Label" />;
