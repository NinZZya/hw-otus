// Задание второго уровня 3
type FIXME = (
  | "initial"
  | "inWork"
  | "buyingSupplies"
  | "producing"
  | "fullfilled"
)[];
// Вариант 2
// type FIXME = Array<
//   "initial" | "inWork" | "buyingSupplies" | "fullfilled" | "producing"
// >;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME =>
  orderStates.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );
