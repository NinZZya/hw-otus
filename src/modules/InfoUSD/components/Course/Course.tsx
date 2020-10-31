import React from "react";
import { Card, Indicator, Label } from "../../../../componets";
import { getRandomColor } from "../../../../utils/utils";

export interface CourseProp {
  value: number;
  indicatorColor?: string;
}

export const Course: React.FC<CourseProp> = (props) => {
  const { value = 0, indicatorColor } = props;
  const color = indicatorColor ? indicatorColor : getRandomColor();

  return (
    <Card>
      <Indicator type={"card"} color={color} />
      <span>Current course:</span>
      <Label value={`$${value}`} />
    </Card>
  );
};
