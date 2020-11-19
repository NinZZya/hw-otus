import React from "react";
import renderer from "react-test-renderer";
import { RandomCourse } from "./RandomCourse";

it("RandomCourse render coorectly", (): void => {
  const tree = renderer.create(<RandomCourse />).toJSON();

  expect(tree).toMatchSnapshot();
});
