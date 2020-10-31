import React from "react";
// also exported from "@storybook/react" if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import { MaxCourse, MaxCourseProp } from "./MaxCourse";

export default {
  title: "Modules/InfoUSD/Components/MaxCourse",
  component: MaxCourse,
} as Meta;

export const WithValue: React.FC<MaxCourseProp> = () => <MaxCourse value={1} />;
