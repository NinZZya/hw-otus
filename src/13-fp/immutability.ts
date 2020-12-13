console.log(`===== IMMUTABILITY =====`);

// Задание 1
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

const originalTeam: OriginalTeam = {
  size: 15,
  name: "Tampa Bay Roosters",
  league: "Minor",
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  return {
    name: "New York Badgers",
    league: originalTeam.league,
    roster: 25,
  };
};

const expectedTeam = originalTeamToExpectedTeam(originalTeam);
console.log("expected team = ", expectedTeam);

// Задание 2
export type SomeArray = Array<number | string>;

export const originalArrayToExpectedArray = (
  originalArray: Readonly<SomeArray>
): SomeArray => ["two", ...originalArray.slice(2, originalArray.length), 5];

const expectedArray = originalArrayToExpectedArray([1, 2, 3, 4]);
console.log("original array to expected array = ", expectedArray);

// Задание 3

export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

const originalTeamDeep: Team = {
  name: "Tampa Bay Roosters",
  captain: {
    name: "Bryan Downey",
    age: 27,
  },
};

export const originalTeamToExpectedTeamDeep = (
  originalTeam: Readonly<Team>
): Team => {
  const captain = { ...originalTeam.captain };
  captain.age = captain.age + 1;
  return {
    ...originalTeam,
    captain,
  };
};

const expectedTeamDeep = originalTeamToExpectedTeamDeep(originalTeamDeep);
console.log("expected team deep = ", expectedTeamDeep);
