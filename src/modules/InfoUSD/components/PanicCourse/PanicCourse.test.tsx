import React from "react";
import renderer from "react-test-renderer";
import { PanicCourse } from "./PanicCourse";

it("MaxCourse render coorectly", () => {
  const tree = renderer
    .create(<PanicCourse value={0} indicatorColor={"#000"} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
