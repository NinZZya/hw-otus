const sum = (a, b) => a + b;

describe("Summ simpl test", () => {
  it("1 + 2", () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
