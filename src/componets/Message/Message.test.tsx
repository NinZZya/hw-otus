import React from "react";
import renderer from "react-test-renderer";
import { Message } from "./Message";

it("Message render coorectly", () => {
  const tree = renderer.create(<Message />).toJSON();

  expect(tree).toMatchSnapshot();
});
