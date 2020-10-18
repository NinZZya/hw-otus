import { isNumber } from "./helpers";

describe("Test isNumber", () => {
  it("'1' is true", () => {
    expect(isNumber("1")).toEqual(true);
  });
  it("'-1' is true", () => {
    expect(isNumber("-1")).toEqual(true);
  });
  it("'0' is true", () => {
    expect(isNumber("0")).toEqual(true);
  });
  it("true is false", () => {
    expect(isNumber("true")).toEqual(false);
  });
  it("'false' is false", () => {
    expect(isNumber("false")).toEqual(false);
  });
  it("'+' is false", () => {
    expect(isNumber("+")).toEqual(false);
  });
  it("'-' is false", () => {
    expect(isNumber("-")).toEqual(false);
  });
  it("'*' is false", () => {
    expect(isNumber("*")).toEqual(false);
  });
  it("'/' is false", () => {
    expect(isNumber("/")).toEqual(false);
  });
  it("'' is false", () => {
    expect(isNumber("")).toBe(false);
  });
  it("' ' is false", () => {
    expect(isNumber(" ")).toBe(false);
  });
});
