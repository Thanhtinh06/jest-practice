import { arraySum, getPositiveNumbers } from "./functions";

describe("functions", () => {
  describe("arraySum", () => {
    it("should return 0 for an empty array", () => {
      const emptyArray = [];
      const result = arraySum(emptyArray);
      expect(result).toBe(0);
    });

    it("should return the sum of all the values in the array", () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      const result = arraySum(numbers);
      expect(result).toBe(21);
    });
  });

  describe("getPositiveNumbers", () => {
    it("should return positive numbers", () => {
      const numbers = [1, -2, -3, -4, 5, -6];
      const positiveNumbers = getPositiveNumbers(numbers);
      const expected = [1, 5];
      expect(positiveNumbers).toEqual(expected);
    });

    it("should return empty array if no positive numbers are present", () => {
      const numbers = [-1, -2, -3, -4, -5];
      const positiveNumbers = getPositiveNumbers(numbers);
      expect(positiveNumbers).toEqual([]);
    });
  });
});
