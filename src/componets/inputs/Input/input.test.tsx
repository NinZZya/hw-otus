import React from "react";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Input } from "./input";

configure({ adapter: new Adapter() });

describe(`Input render coorectly`, () => {
  it(`Input without props render coorectly`, () => {
    const tree = renderer.create(<Input />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Input with value render coorectly`, () => {
    const tree = renderer.create(<Input value="value" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Input was changed`, () => {
    const onChange = jest.fn();
    const button = shallow(<Input onChange={onChange} />);

    button.simulate("change");
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
