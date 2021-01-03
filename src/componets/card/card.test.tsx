import React from "react";
import renderer from "react-test-renderer";
import { Card } from "./card";

describe(`Card render coorectly`, () => {
  it(`Card without props render coorectly`, () => {
    const tree = renderer.create(<Card />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Card with text render coorectly`, () => {
    const tree = renderer.create(<Card>Card</Card>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
