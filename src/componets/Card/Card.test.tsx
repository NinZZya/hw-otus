import React from "react";
import renderer from "react-test-renderer";
import { Card } from "./Card";

it("Card render coorectly", () => {
  const tree = renderer.create(<Card />).toJSON();

  expect(tree).toMatchSnapshot();
});
