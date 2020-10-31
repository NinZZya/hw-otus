import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { PanicCourse, PanicCourseProp } from "./PanicCourse";

export default {
  title: "Modules/InfoUSD/Components/PanicCourse",
  component: PanicCourse,
} as Meta;

export const DontPanic: React.FC<PanicCourseProp> = () => (
  <PanicCourse value={1} indicatorColor="#ff0000" />
);

export const WithPanic: React.FC<PanicCourseProp> = () => (
  <PanicCourse value={100} indicatorColor="#ff0000" />
);
