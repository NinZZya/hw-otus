import { BarChartProp } from "../bar-chart";
import { BarProp } from "../components/bar/bar";

const TEXT_GAP = 15;

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
    chart.barWidth && chart.barWidth < width ? chart.barWidth : width;

  const maxValue = Math.max(...chart.values);

  const bars = chart.values.map((value, index) => {
    const barHeight = Math.floor((value / maxValue) * height);

    return {
      x: chart.margin + index * (barWidth + chart.padding),
      y: chart.margin + height - barHeight + TEXT_GAP + chart.padding,
      width: barWidth,
      height: barHeight,
      value: Math.round(value),
      label: chart.labels[index],
      margin: chart.margin,
      padding: chart.padding,
      barColor: chart.barColor ? chart.barColor : "",
      textColor: chart.textColor ? chart.textColor : "",
    };
  });

  return bars;
};
