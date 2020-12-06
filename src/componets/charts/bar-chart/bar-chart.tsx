import React from "react";
import { Stage, Layer } from "react-konva";
/** @jsx jsx */
import { jsx, css, useTheme } from "@emotion/react";
import { Bar } from "./components/bar/bar";
import { createBars } from "./utils/bar-chart";
import { SerializedStyles } from "@emotion/utils/types";

export interface BarChartProp {
  type?: "verticall" | "horizontally";
  margin: number;
  padding: number;
  width: number;
  height: number;
  barWidth?: number;
  values: number[];
  labels: string[];
  barColor?: string;
  textColor?: string;
}

interface Theme {
  color?: {
    text: string;
    surface: string;
    border: string;
  };
}

const DefaultColor = {
  TEXT: "#ffffff",
  SURFACE: "#121212",
  BORDER: "#111111",
};

const getBarChartStyle = (theme: Theme): SerializedStyles => css`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 1rem;
  color: ${theme.color ? theme.color.text : DefaultColor.TEXT};
  background-color: ${theme.color ? theme.color.surface : DefaultColor.TEXT};
  border: 1px solid ${theme.color ? theme.color.border : DefaultColor.BORDER};
  border-radius: 0.3rem;
  box-sizing: border-box;
`;

export const BarChart: React.FC<BarChartProp> = (props) => {
  const theme = useTheme();
  const bars = createBars(props);

  return (
    <div css={getBarChartStyle(theme)}>
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
