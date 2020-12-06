import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
/** @jsx jsx */
import { jsx } from "@emotion/core";

interface BarProp {
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  label: string;
  margin: number;
  padding: number;
}

interface BarChartProp {
  type?: "verticall" | "horizontally";
  margin: number;
  padding: number;
  width: number;
  height: number;
  barWidth?: number;
  values: number[];
  labels: string[];
}

enum Color {
  PRIMARY = "#3700b3",
  SECONDARY = "#2a2a2a",
  BACKGROUND = "#000000",
  SURFACE = "#121212",
  TEXT = "#ffffff",
  BORDER = "#111111",
  ERROR = "#cf6679",
  SHADOW_BORDER = "rgba(255, 255, 255, 0.1)",
}

const TEXT_GAP = 15;
const BAR_COLOR = Color.PRIMARY;
const TEXT_COLOR = Color.TEXT;

const styleChart = {
  padding: "1rem",
  backgroundColor: Color.SURFACE,
  borderRadius: "0.3rem",
};

export const createBars = (chart: BarChartProp): BarProp[] => {
  // height = margin * 2 (margin top and margin bottom) - text gap * 2 (value and label) -  padding* 2 (paddings for value and label)
  const height =
    chart.height - chart.margin * 2 - TEXT_GAP * 2 - chart.padding * 2;
  const count = chart.values.length;
  // width = (width chart - margin * 2 (margin top and margin bottom) - bar paddings) / bar count
  const width = Math.floor(
    (chart.width - chart.margin * 2 - chart.padding * (count - 1)) / count
  );

  const barWidth =
    chart.barWidth && chart.barWidth < width ? chart.barWidth : chart.width;

  const maxValue = Math.max(...chart.values);

  const bars = chart.values.map((value, index) => {
    const barHeight = Math.floor((value / maxValue) * height);

    return {
      x: chart.margin + index * (width + chart.padding),
      y: chart.margin + height - barHeight + TEXT_GAP + chart.padding,
      width: barWidth,
      height: barHeight,
      value: Math.round(value),
      label: chart.labels[index],
      margin: chart.margin,
      padding: chart.padding,
    };
  });

  return bars;
};

const Bar: React.FC<BarProp> = (props) => {
  const { x, y, width, height, value, label, margin, padding } = props;
  const valueY = y - margin - padding;
  const labelY = y + height + padding;
  return (
    <>
      <Text text={String(value)} fill={TEXT_COLOR} x={x} y={valueY} />
      <Rect x={x} y={y} width={width} height={height} fill={BAR_COLOR} />
      <Text text={label} fill={TEXT_COLOR} x={x} y={labelY} />
    </>
  );
};

export const BarChart: React.FC<BarChartProp> = (props) => {
  const bars = createBars(props);

  return (
    <div css={styleChart}>
      <Stage width={props.width} height={props.height}>
        <Layer>
          {bars.map((bar, index) => (
            <Bar key={index} {...bar} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
