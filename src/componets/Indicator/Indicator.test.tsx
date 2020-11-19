import React from "react";
import renderer from "react-test-renderer";
import { Indicator } from "./Indicator";

it("Indicator render coorectly", () => {
  const tree = renderer.create(<Indicator />).toJSON();

  expect(tree).toMatchSnapshot();
});
