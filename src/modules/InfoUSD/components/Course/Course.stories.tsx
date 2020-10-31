import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { Course, CourseProp } from "./Course";

export default {
  title: "Modules/InfoUSD/Components/Course",
  component: Course,
} as Meta;

export const WithValue: React.FC<CourseProp> = () => (
  <Course value={1} indicatorColor="#ff0000" />
);
