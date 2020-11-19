import React from "react";
import renderer from "react-test-renderer";
import { Label } from "./Label";

it("Label render coorectly", () => {
  const tree = renderer.create(<Label value="test" />).toJSON();

  expect(tree).toMatchSnapshot();
});
