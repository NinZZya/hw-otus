import React from "react";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Form } from "./form";

configure({ adapter: new Adapter() });

describe(`Form render coorectly`, () => {
  it(`Form without props render coorectly`, () => {
    const tree = renderer.create(<Form />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Form with components render coorectly`, () => {
    const tree = renderer
      .create(
        <Form>
          <input />
          <input />
          <button />
        </Form>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Form was submited`, () => {
    const onSubmit = jest.fn();
    const button = shallow(<Form onSubmit={onSubmit} />);

    button.simulate("submit");
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
