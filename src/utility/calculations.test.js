import { it, expect, describe } from "vitest";
import {
  calculateResults,
  getPrincipal,
  calculateInterest,
  calculatePayments,
} from "./calculations";

describe("calculateResults()", () => {
  it("should yield type of object if correct values are passed", () => {
    const principal = 1000;
    const calculatedInterest = 3;
    const calculatedPayments = 1;
    const result = calculateResults(
      principal,
      calculatedInterest,
      calculatedPayments
    );
    expect(result).toBeTypeOf("object");
  });
  it("should yield NaN for each result property if zero input interest is provided", () => {
    const principal = 1000;
    const calculatedInterest = 0;
    const calculatedPayments = 1;
    const result = calculateResults(
      principal,
      calculatedInterest,
      calculatedPayments
    );
    expect(result["monthly"]).toBe("NaN");
    expect(result["totalPayments"]).toBe("NaN");
    expect(result["totalInterest"]).toBe("NaN");
  });
  it("should yield NaN fro each result property if invalid string input value is passed", () => {
    const principal = "invalid";
    const calculatedInterest = 5;
    const calculatedPayments = 1;
    const result = calculateResults(
      principal,
      calculatedInterest,
      calculatedPayments
    );
    expect(result["monthly"]).toBe("NaN");
    expect(result["totalPayments"]).toBe("NaN");
    expect(result["totalInterest"]).toBe("NaN");
  });
  it("should yield negative result if negative years value is provided", () => {
    const principal = 1000;
    const calculatedInterest = 5;
    const calculatedPayments = -10;
    const result = calculateResults(
      principal,
      calculatedInterest,
      calculatedPayments
    );
    expect(+result["monthly"]).toBeLessThan(0);
  });
  it("should yield NaN if no value is passed", () => {
    const result = calculateResults();
    expect(result["monthly"]).toBe("NaN");
  });
});

describe("getPrincipal()", () => {
  it("should yield NaN if string number is not provided", () => {
    const amount = "invalid";
    const result = getPrincipal(amount);
    expect(result).toBe(NaN);
  });
  it("should yield type of number if string number is provided", () => {
    const amount = "1";
    const result = getPrincipal(amount);
    expect(result).toBeTypeOf("number");
  });
  it("should yield typeof NaN  if empty string is not passed", () => {
    const amount = "  ";
    const result = getPrincipal(amount);
    expect(result).toBeNaN();
  });
});
describe("calculateInterest()", () => {
  it("should yield typeOf NaN if empty string is passed", () => {
    const interest = "";
    const result = calculateInterest(interest);
    expect(result).toBeNaN();
  });
  it("should yield type of number if string number is provided", () => {
    const interest = "1";
    const result = calculateInterest(interest);
    expect(result).toBeTypeOf("number");
  });
});
describe("calculatePayments()", () => {
  it("should yield typeOf number if string number is passed", () => {
    const years = "1";
    const result = calculatePayments(years);
    expect(result).toBeTypeOf("number");
  });
  it("should yield NaN if empty string is passed", () => {
    const years = " ";
    const result = calculatePayments(years);
    expect(result).toBeNaN();
  });
});
