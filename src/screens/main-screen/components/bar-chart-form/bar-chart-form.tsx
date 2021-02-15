import React from "react";
import { Form, Input, Col } from "../../../../componets";

interface BarChartFormProp {
  barColor: string;
  count: number;
  minCount: number;
  minWidth: number;
  minHeight: number;
  onBarChartFormChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BarChartFormName = {
  TITLE: "title",
  COUNT: "count",
  WIDTH: "width",
  HEIGHT: "height",
  BAR_COLOR: "barColor",
};

export const BarChartForm: React.FC<BarChartFormProp> = (props) => {
  const {
    minWidth,
    minHeight,
    barColor,
    count,
    minCount,
    onBarChartFormChange,
  } = props;

  return (
    <Form width="400px" height="450px" margin="0 1rem 0 0">
      <Input
        required
        type="text"
        name={BarChartFormName.TITLE}
        placeholder="Title"
        onChange={onBarChartFormChange}
      />
      <Col alignItems="center" padding="0" margin="0">
        Count
        <Input
          required
          type="number"
          name={BarChartFormName.COUNT}
          value={count}
          min={minCount}
          max="10"
          step="1"
          margin="0 0 0 1em"
          height="1rem"
          onChange={onBarChartFormChange}
        />
      </Col>
      <Col alignItems="center" padding="0" margin="0">
        Width
        <Input
          required
          type="range"
          name={BarChartFormName.WIDTH}
          min={String(minWidth)}
          max="900"
          margin="0 0 0 1em"
          padding="0"
          height="1rem"
          onChange={onBarChartFormChange}
        />
      </Col>
      <Col alignItems="center" padding="0" margin="0">
        Height
        <Input
          required
          type="range"
          name={BarChartFormName.HEIGHT}
          min={minHeight}
          max="350"
          margin="0 0 0 1em"
          padding="0"
          height="1rem"
          onChange={onBarChartFormChange}
        />
      </Col>

      <Input
        required
        type="color"
        padding="0"
        value={barColor}
        name={BarChartFormName.BAR_COLOR}
        onChange={onBarChartFormChange}
      />
    </Form>
  );
};
