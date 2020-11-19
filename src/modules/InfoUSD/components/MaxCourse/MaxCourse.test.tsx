import React from "react";
import renderer from "react-test-renderer";
import { MaxCourse } from "./MaxCourse";

it("MaxCourse render coorectly", () => {
  const tree = renderer
    .create(<MaxCourse value={0} indicatorColor={"#000"} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
