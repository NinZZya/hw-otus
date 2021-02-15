import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import { Button } from "./button";

configure({ adapter: new Adapter() });

describe(`Button render coorectly`, () => {
  it(`Button without props render coorectly`, () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Button with text render coorectly`, () => {
    const tree = renderer.create(<Button>Button</Button>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Button was clicked`, () => {
    const onClick = jest.fn();
    const button = shallow(<Button onClick={onClick} />);

    button.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
