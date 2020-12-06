import { createBars } from "./bar-chart";

const chart = {
  values: [14138.560000000001, 18118, 4359.84, 8901.34],
  labels: ["USA", "RUSSIA", "GERMANY", "SPAIN"],
  margin: 20,
  padding: 20,
  width: 500,
  height: 300,
};

const bars = [
  {
    x: 20,
    y: 97,
    width: 100,
    height: 148,
    value: 14139,
    label: "USA",
    margin: 20,
    padding: 20,
  },
  {
    x: 140,
    y: 55,
    width: 100,
    height: 190,
    value: 18118,
    label: "RUSSIA",
    margin: 20,
    padding: 20,
  },
  {
    x: 260,
    y: 200,
    width: 100,
    height: 45,
    value: 4360,
    label: "GERMANY",
    margin: 20,
    padding: 20,
  },
  {
    x: 380,
    y: 152,
    width: 100,
    height: 93,
    value: 8901,
    label: "SPAIN",
    margin: 20,
    padding: 20,
  },
];

describe("Test createBars", () => {
  it(`For chart=${chart} to ${bars}`, () => {
    expect(createBars(chart)).toEqual(bars);
  });
});
