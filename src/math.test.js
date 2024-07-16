import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all numbers in an array", () => {
  //Arrange
  const numbers = [1, 2, 3, 5, 6, 7, 89];

  //Act
  const result = add(numbers);

  //Assert
  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const invalidInputs = ["NaN", 1];

  const invalidResult = add(invalidInputs);

  expect(invalidResult).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const stringNumbers = ["1", "2"];

  const result = add(stringNumbers);

  const expectedResult = stringNumbers.reduce(
    (prevValue, curValue) => Number(prevValue) + Number(curValue),
    0
  );

  expect(result).toBe(expectedResult);
});

it("should yield 0 if empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no numbers are passed to the array", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrowError();
});
