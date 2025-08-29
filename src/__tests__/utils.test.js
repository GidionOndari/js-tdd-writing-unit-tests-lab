// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  // Edge cases
  it("handles uppercase and lowercase letters", () => {
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  // Bonus
  it("throws an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("hello123")).toThrow();
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(12345)).toThrow();
  });
});
