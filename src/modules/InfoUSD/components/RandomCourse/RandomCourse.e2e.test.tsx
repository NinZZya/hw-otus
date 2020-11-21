import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { RandomCourse } from "./RandomCourse";

configure({ adapter: new Adapter() });
const COURSE = 70;
const USD = "$";

it("RandomCourse changed", async (): Promise<void> => {
  const onGetCourse = jest.fn(() => Promise.resolve(COURSE));

  const wrapper = mount(
    <RandomCourse currency={USD} onGetCourse={onGetCourse} />
  );

  const evt = new KeyboardEvent("keydown", { key: "u" });
  document.dispatchEvent(evt);

  expect(onGetCourse).toHaveBeenCalledTimes(1);

  await wrapper.update();

  expect(wrapper.state("value")).toBe(COURSE);

  const label = wrapper.find("span").at(2);
  expect(label.text()).toEqual(`${USD}${COURSE}`);
});
