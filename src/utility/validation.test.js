import { describe, it, expect } from "vitest";
import { validateInputValue, validateNumber } from "./validation";

describe("validateInputValue()", () => {
  it("should throw an error if empty string is passed", () => {
    const inputValue = "";
    const resultFn = () => {
      validateInputValue(inputValue);
    };
    expect(resultFn).toThrow();
  });
  it("should throw an error if string value zero is passed", () => {
    const inputValue = "0";
    const resultFn = () => {
      validateInputValue(inputValue);
    };
    expect(resultFn).toThrow();
  });
  it("should throw an error if negative string is passed", () => {
    const inputValue = "-1";
    const resultFn = () => {
      validateInputValue(inputValue);
    };
    expect(resultFn).toThrow();
  });
  it("should not throw an error if positive string is passed", () => {
    const inputValue = "1";
    const resultFn = () => {
      validateInputValue(inputValue);
    };
    expect(resultFn).not.toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw an error if passed value is not type of number", () => {
    const inputValue = "invalid";
    const resultFn = () => {
      validateNumber(inputValue);
    };
    expect(resultFn).toThrow();
  });
  it("should throw an error if string value is passed", () => {
    const inputValue = "1";
    const resultFn = () => {
      validateNumber(inputValue);
    };
    expect(resultFn).toThrow();
  });
  it("should not throw an error if passed value is type of number", () => {
    const inputValue = 1;
    const resultFn = () => {
      validateNumber(inputValue);
    };
    expect(resultFn).not.toThrow();
  });
});
