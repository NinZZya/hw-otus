import React from "react";
import renderer from "react-test-renderer";
import { Row } from "./row";

describe(`Row render coorectly`, () => {
  it(`Row without props render coorectly`, () => {
    const tree = renderer.create(<Row />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Row with components render coorectly`, () => {
    const tree = renderer
      .create(
        <Row>
          <div>div</div>
          <div>div</div>
          <div>div</div>
        </Row>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
