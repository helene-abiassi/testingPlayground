import { expect, it } from "vitest";
import { transformToNumber } from "./numbers";

it("should return a number when passed a string numerical input value", () => {
  //Arrange
  const inputValue = "2";

  //Act
  const numericValue = transformToNumber(inputValue);

  //Assert
  expect(numericValue).toBeTypeOf("number");
  //this is better than using toBeNaN, because NaN is of type Number
});

it("should throw an error if a non-numerical value is passed", () => {
  const nonNumericValue = "Hello World";

  const nonNumericResult = transformToNumber(nonNumericValue);

  expect(nonNumericResult).toBeNaN();

  //   const resultFn = () => {
  //     transformToNumber(nonNumericValue);
  //   };

  //   expect(resultFn).toThrowError;
});
