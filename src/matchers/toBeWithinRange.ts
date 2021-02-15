/* eslint-disable @typescript-eslint/no-namespace */

export {};

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeWithinRange(a: number, b: number): R;
    }
  }
}

function toBeWithinRange(received: number, floor: number, ceiling: number) {
  const pass = received >= floor && received <= ceiling;
  if (pass) {
    return {
      message: () =>
        `expected ${received} not to be within range ${floor} - ${ceiling}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected ${received} to be within range ${floor} - ${ceiling}`,
      pass: false,
    };
  }
}

expect.extend({
  toBeWithinRange,
});
