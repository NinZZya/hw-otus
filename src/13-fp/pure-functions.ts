console.log(`===== PURE FUNCTIONS =====`);
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

export const getTopTeam = (teams: Team[]): Team =>
  teams.reduce(getTopTeamByScore, { name: "", score: -1 });

export const getTeamName = (team: Team): string => team.name;

export const getTopName = (teams: Team[]): string =>
  getTeamName(getTopTeam(teams));

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

export const createQs = (qsObj: QsObj): string =>
  `?${Object.keys(qsObj)
    .map((key) => `${key}=${qsObj[key]}`)
    .join("&")}`;

const resultQs = createQs(qsObj);
console.log("qs = ", resultQs);

// Задание 3
const qs = "?page=2&pageSize=10&total=205&somethingElse=value";
export const createObjPair = (accum: QsObj, pair: string): QsObj => {
  const pairs = pair.split("=");
  accum[pairs[0]] = pairs[1];
  return accum;
};

export const createObjQs = (pairs: string[]): QsObj =>
  pairs.reduce(createObjPair, {});
export const getPairsQs = (qs: string): string[] => qs.split("&");
export const removeFirstChar = (string: string): string => string.slice(1);
export const parseQs = (qs: string): QsObj =>
  createObjQs(getPairsQs(removeFirstChar(qs)));

const resultQsObj = parseQs(qs);
console.log("qsObj = ", resultQsObj);
