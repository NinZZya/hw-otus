import React from "react";
import renderer from "react-test-renderer";
import { Bar } from "./bar";

const bar = {
  x: 10,
  y: 20,
  width: 30,
  height: 100,
  value: 100,
  label: "Label",
  margin: 10,
  padding: 10,
  barColor: "#ffffff",
  textColor: "#0000000",
};

describe(`Bar render coorectly`, () => {
  it(`Bar with data render coorectly`, () => {
    const tree = renderer.create(<Bar {...bar} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
