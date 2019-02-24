const validateSearchInput = require("../../validation/search");
const isEmpty = require("../../validation/is-Empty");

describe('isEmpty validation',() => {
  it("return true if '' or {} ", () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty('')).toBe(true)
  });

  it("returns false if not empty", () => {
    expect(isEmpty('not empty')).toBe(false)
  });
});