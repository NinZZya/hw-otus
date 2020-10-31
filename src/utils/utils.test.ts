import "../matchers/toBeWithinRange";
import {
  getRandomInt,
  getRandomUSD,
  getRandomColor,
  getRandomSign,
  BASE_USD,
  Range,
} from "./utils";

const regexHex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

const RangeInt1 = {
  MIN: -1,
  MAX: 5,
};

const RangeInt2 = {
  MIN: 1,
  MAX: 5,
};

const RangeInt3 = {
  MIN: 5,
  MAX: -5,
};

const RangeInt4 = {
  MIN: BASE_USD - Range.MAX,
  MAX: BASE_USD + Range.MAX,
};

describe(`Test getRandomInt`, () => {
  it(`Random to range: [${RangeInt1.MIN}, ${RangeInt1.MAX}]`, () => {
    expect(getRandomInt(RangeInt1.MIN, RangeInt1.MAX)).toBeWithinRange(
      RangeInt1.MIN,
      RangeInt1.MAX
    );
  });

  it(`Random to range: [${RangeInt2.MIN}, ${RangeInt2.MAX}]`, () => {
    expect(getRandomInt(RangeInt2.MIN, RangeInt2.MAX)).toBeWithinRange(
      RangeInt2.MIN,
      RangeInt2.MAX
    );
  });

  it(`Random to range: [${RangeInt3.MIN}, ${RangeInt3.MAX}]`, () => {
    expect(() => {
      getRandomInt(RangeInt3.MIN, RangeInt3.MAX);
    }).toThrow();
  });

  it(`Random to range: [${RangeInt4.MIN}, ${RangeInt4.MAX}]`, () => {
    expect(getRandomInt(RangeInt4.MIN, RangeInt4.MAX)).toBeWithinRange(
      RangeInt4.MIN,
      RangeInt4.MAX
    );
  });
});

describe(`Test getRandomUSD`, () => {
  it(`Random USD to range: [${RangeInt4.MIN}, ${RangeInt4.MAX}]`, () => {
    expect(getRandomUSD()).toBeWithinRange(RangeInt4.MIN, RangeInt4.MAX);
  });
});

describe(`Test getRandomSign`, () => {
  it(`Sign is -1 or 1`, () => {
    expect(getRandomSign()).toBeWithinRange(-1, 1);
  });

  it(`Sign is not 0`, () => {
    expect(getRandomSign()).not.toBe(0);
  });

  it(`Sign is not -2`, () => {
    expect(getRandomSign()).not.toBe(-2);
  });

  it(`Sign is not 2`, () => {
    expect(getRandomSign()).not.toBe(2);
  });

  it(`Sign is not -0.5`, () => {
    expect(getRandomSign()).not.toBe(-0.5);
  });

  it(`Sign is not 0.5`, () => {
    expect(getRandomSign()).not.toBe(0.5);
  });
});

describe(`Test getRandomColor`, () => {
  it(`Random color`, () => {
    expect(getRandomColor()).toEqual(expect.stringMatching(regexHex));
  });
});
