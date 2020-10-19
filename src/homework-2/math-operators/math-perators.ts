export type UnaryOperationType = (value: number) => number;
export type BinaryOperationType = (first: number, second: number) => number;


export const mul: BinaryOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: BinaryOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: BinaryOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: BinaryOperationType = (
  first: number,
  second: number
): number => first - second;


export const pow: BinaryOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const mathOperators: { [key: string]: UnaryOperationType | BinaryOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": pow,
};

export const mathPriorities: number[] = [1, 2];

const [FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "+": SECOND,
  "-": SECOND,
};
