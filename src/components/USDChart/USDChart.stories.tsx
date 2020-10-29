import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { USDChart } from "./USDChart";

const chart = {
  values: [
    79.8034,
    80.0023,
    76.5234,
    76.6567,
    76.3567,
    76.23456,
    76.7345,
    78.3453,
    79.9345,
    76.2543,
  ],
  labels: [
    "15:50:00",
    "15:50:05",
    "15:50:10",
    "15:50:15",
    "15:50:20",
    "15:50:25",
    "15:50:30",
    "15:50:35",
    "15:50:40",
    "15:50:45",
  ],
  colors: [
    "#03dac5",
    "#03dac5",
    "#ff7597",
    "#03dac5",
    "#ff7597",
    "#ff7597",
    "#03dac5",
    "#03dac5",
    "#03dac5",
    "#ff7597",
  ],
  margin: 50,
  padding: 20,
  width: 900,
  height: 400,
  maxValue: 80,
};

export default {
  title: "Example/charts/USDChart",
  component: USDChart,
} as Meta;

export const ThreeBar: React.FC = () => <USDChart chart={chart} />;
