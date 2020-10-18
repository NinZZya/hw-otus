const regexp = /\S/;
export const isNumber = (item: string): boolean =>
  regexp.test(item) && !isNaN(Number(item));
