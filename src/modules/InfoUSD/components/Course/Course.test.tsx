import React from "react";
import renderer from "react-test-renderer";
import { Course } from "./Course";

it("Course render coorectly", () => {
  const tree = renderer
    .create(<Course value={0} indicatorColor={"#000"} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
