export const BASE_USD = 75;
export const Range = {
  MIN: 0,
  MAX: 5,
};

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min > max) {
    throw new Error(`Min ${min} > Max ${max}`);
  }

  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomSign = (): number => (Math.random() > 0.5 ? 1 : -1);

export const getRandomUSD = (): number =>
  BASE_USD + getRandomInt(Range.MIN, Range.MAX) * getRandomSign();
