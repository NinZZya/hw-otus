import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
/** @jsx jsx */
import { jsx } from "@emotion/core";

interface Chart {
  type?: "verticall" | "horizontally";
  margin: number;
  padding: number;
  width: number;
  height: number;
  values: number[];
  labels: string[];
  colors: string[];
  maxValue: number;
}

interface BarProp {
  x: number;
  y: number;
  width: number;
  height: number;
  value: number;
  label: string;
  margin: number;
  padding: number;
  color: string;
}

interface USDChartProp {
  chart: Chart;
}

const TEXT_GAP = 15;
const TEXT_COLOR = "#fff";

const styleChart = {
  padding: "1rem",
  backgroundColor: "#222",
  borderRadius: "0.3rem",
};

export const createBars = (chart: Chart): BarProp[] => {
  const { values, margin, padding, labels, colors } = chart;
  // height = margin * 2 (margin top and margin bottom) - text gap * 2 (value and label) -  padding* 2 (paddings for value and label)
  const height = chart.height - margin * 2 - TEXT_GAP * 2 - padding * 2;
  const count = values.length;
  // width = (width chart - margin * 2 (margin top and margin bottom) - bar paddings) / bar count
  const width = Math.floor(
    (chart.width - margin * 2 - padding * (count - 1)) / count
  );

  const maxValue = Math.max(...values);
  const bars = chart.values.map((value, index) => {
    const barHeight = (value / maxValue) * height;

    return {
      x: margin + index * (width + chart.padding),
      y: margin + height - barHeight + TEXT_GAP + padding,
      width,
      height: barHeight,
      value: Number(value.toFixed(2)),
      label: labels[index],
      margin: margin,
      padding: padding,
      color: colors[index],
    };
  });

  return bars;
};

const Bar: React.FC<BarProp> = (props) => {
  const { x, y, width, height, value, label, margin, padding, color } = props;
  const valueY = y - margin + padding;
  const labelY = y + height + padding;
  return (
    <>
      <Text text={String(value)} fill={TEXT_COLOR} x={x} y={valueY} />
      <Rect x={x} y={y} width={width} height={height} fill={color} />
      <Text text={label} fill={TEXT_COLOR} x={x} y={labelY} />
    </>
  );
};

export const USDChart: React.FC<USDChartProp> = (pops) => {
  const { chart } = pops;

  const bars = createBars(chart);
  return (
    <div css={styleChart}>
      <Stage width={chart.width} height={chart.height}>
        <Layer>
          {bars.map((bar, index) => (
            <Bar key={index} {...bar} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
