import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { RandomCourse } from "./RandomCourse";
const COURSE = 70;
const USD = "$";
const testing = () => Promise.resolve(COURSE);

export default {
  title: "Modules/InfoUSD/Components/RandomCourse",
  component: RandomCourse,
} as Meta;

export const WithValue = (): React.ReactNode => (
  <RandomCourse currency={USD} onGetCourse={testing} />
);
