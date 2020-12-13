import {
  Team,
  QsObj,
  getTopTeamByScore,
  getTeamName,
  getTopName,
  getPairs,
  createQs,
  removeFirstChar,
  createObjPair,
  parseQs,
} from "./ramda-pure-functions";

// Задание 1
test("getTopTeamByScore", () => {
  expect(
    getTopTeamByScore(
      { name: "Monkeys", score: 2 },
      { name: "Lions", score: 5 }
    )
  ).toEqual({ name: "Lions", score: 5 });

  expect(
    getTopTeamByScore({ name: "Lions", score: 5 }, { name: "Bears", score: 6 })
  ).toEqual({ name: "Bears", score: 6 });
});

test("getTeamName", () => {
  expect(getTeamName({ name: "Tigers", score: 4 })).toBe("Tigers");
  expect(getTeamName({ name: "Bears", score: 6 })).toBe("Bears");
});

test("getTopName", () => {
  const teams: Team[] = [
    { name: "Lions", score: 5 },
    { name: "Tigers", score: 4 },
    { name: "Bears", score: 6 },
    { name: "Monkeys", score: 2 },
  ];

  expect(getTopName(teams)).toBe("Bears");
});

// Задание 2
test("getPairs", () => {
  const qsObj: QsObj = {
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  };

  expect(getPairs(qsObj)).toEqual([
    ["page", "2"],
    ["pageSize", "10"],
    ["total", "205"],
    ["somethingElse", "value"],
  ]);
});

test("createQs", () => {
  const qsObj: QsObj = {
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  };

  expect(createQs(qsObj)).toBe(
    "?page=2&pageSize=10&total=205&somethingElse=value"
  );
});

// Задание 3
test("removeFirstChar", () => {
  expect(removeFirstChar("?page=2")).toBe("page=2");
  expect(removeFirstChar("page=2")).toBe("age=2");
  expect(removeFirstChar("age=2")).toBe("ge=2");
});

test("createObjPair", () => {
  expect(createObjPair({}, "page=2")).toEqual({ page: "2" });

  expect(createObjPair({ page: "2" }, "pageSize=10")).toEqual({
    page: "2",
    pageSize: "10",
  });
});

test("parseQs", () => {
  const qs = "?page=2&pageSize=10&total=205&somethingElse=value";

  expect(parseQs(qs)).toEqual({
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  });
});
