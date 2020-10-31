import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Indicator, IndicatorProp } from "./Indicator";
import { Card } from "../Card/Card";

export default {
  title: "Components/Indicator",
  component: Indicator,
} as Meta;

export const EmptyIndicator: React.FC<IndicatorProp> = () => <Indicator />;
export const GreenIndicator: React.FC<IndicatorProp> = () => (
  <Indicator color="#00ff00" />
);
export const CardIndicator: React.FC<IndicatorProp> = () => (
  <Card>
    <Indicator type="card" />
  </Card>
);
