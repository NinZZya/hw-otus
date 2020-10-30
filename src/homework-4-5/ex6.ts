// Задание второго уровня 3

// Что я делаю не так?
// Если верить IDE  то я получаю тип type FIXME = ("initial" | "inWork" | "fullfilled")[]
// Согласно моим расчетом результат выполнения функции ["initial", "inWork", "fullfilled"]
// type S =
//   | "buyingSupplies"
//   | "producing";

// type FIXME = Exclude<OrderState, S>[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

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
