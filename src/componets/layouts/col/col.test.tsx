import React from "react";
import renderer from "react-test-renderer";
import { Col } from "./col";

describe(`Col render coorectly`, () => {
  it(`Col without props render coorectly`, () => {
    const tree = renderer.create(<Col />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Col with components render coorectly`, () => {
    const tree = renderer
      .create(
        <Col>
          <div>div</div>
          <div>div</div>
          <div>div</div>
        </Col>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
