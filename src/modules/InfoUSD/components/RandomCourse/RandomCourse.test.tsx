import React from "react";
import renderer from "react-test-renderer";
import { RandomCourse } from "./RandomCourse";

const COURSE = 70;
const testing = () => Promise.resolve(COURSE);

it("RandomCourse render coorectly", (): void => {
  const tree = renderer
    .create(<RandomCourse currency="$" onGetCourse={testing} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
