import React from "react";
import { Rect, Text } from "react-konva";
/** @jsx jsx */
import { jsx } from "@emotion/core";

export interface BarProp {
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  label: string;
  margin: number;
  padding: number;
  barColor: string;
  textColor: string;
}

const DefaultColor = {
  BAR: "#3700b3",
  TEXT: "#ffffff",
};

export const Bar: React.FC<BarProp> = (props) => {
  const { x, y, width, height, value, label, margin, padding } = props;
  const valueY = y - margin - padding;
  const labelY = y + height + padding;
  const barColor = props.barColor ? props.barColor : DefaultColor.BAR;
  const textColor = props.textColor ? props.textColor : DefaultColor.TEXT;

  return (
    <>
      <Text text={String(value)} fill={textColor} x={x} y={valueY} />
      <Rect x={x} y={y} width={width} height={height} fill={barColor} />
      <Text text={label} fill={textColor} x={x} y={labelY} />
    </>
  );
};
