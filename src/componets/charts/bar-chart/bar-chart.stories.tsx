import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { BarChart } from "./bar-chart";

const chart = {
  values: [14138.560000000001, 18118, 4359.84, 8901.34],
  labels: ["USA", "RUSSIA", "GERMANY", "SPAIN"],
  margin: 20,
  padding: 20,
  width: 500,
  height: 300,
};

export default {
  title: "Example/charts/BarChart",
  component: BarChart,
} as Meta;

export const ThreeBar: React.FC = () => <BarChart chart={chart} />;
