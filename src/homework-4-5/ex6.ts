// Задание второго уровня 3
type S =
  | "buyingSupplies"
  | "producing";

type FIXME = Exclude<OrderState, S>[];


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
  ) as FIXME;
