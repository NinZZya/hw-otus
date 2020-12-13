import { compose, reduce, concat, join, map, toPairs, split } from "ramda";

console.log(`===== RAMDA PURE FUNCTIONS =====`);

// Задание 1
export type Team = { name: string; score: number };

const teams: Team[] = [
  { name: "Lions", score: 5 },
  { name: "Tigers", score: 4 },
  { name: "Bears", score: 6 },
  { name: "Monkeys", score: 2 },
];

export const getTopTeamByScore = (result: Team, item: Team): Team =>
  item.score > result.score ? item : result;

export const getTeamName = (team: Team): string => team.name;

export const getTopName = compose(
  getTeamName,
  reduce(getTopTeamByScore, { name: "", score: -1 })
);

const topTeamName = getTopName(teams);
console.log(`Top team name is ${topTeamName}`);

// Задание 2
export type QsObj = Record<string, string | number | boolean>;
const qsObj = {
  page: "2",
  pageSize: "10",
  total: "205",
  somethingElse: "value",
};

export const getPairs = (obj: QsObj): [string, string][] =>
  toPairs(obj as { [key: string]: string });

export const createQs = compose(
  concat("?"),
  join("&"),
  map(join("=")),
  getPairs
);

const resultQs = createQs(qsObj);
console.log("qs = ", resultQs);

// Задание 3
const qs = "?page=2&pageSize=10&total=205&somethingElse=value";
export const createObjPair = (accum: QsObj, pair: string): QsObj => {
  const pairs = pair.split("=");
  accum[pairs[0]] = pairs[1];
  return accum;
};

export const removeFirstChar = (string: string): string => string.slice(1);

export const parseQs = compose(
  reduce(createObjPair, {}),
  split("&"),
  removeFirstChar
);

const resultQsObj = parseQs(qs);
console.log("qsObj = ", resultQsObj);
