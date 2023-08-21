import { add } from "../src/calc";

describe("test add function", () => {
  it("should return 10 for 6 + 4", () => {
    expect(add(6,4)).toBe(10);
  })
})