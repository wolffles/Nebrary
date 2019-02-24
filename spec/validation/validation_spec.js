const validateSearchInput = require("../../validation/search");
const isEmpty = require("../../validation/is-Empty");

describe('isEmpty validation',() => {
  it("return true if '' or {} ", () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty('')).toBe(true)
  });

  it("returns false if not empty", () => {
    expect(isEmpty('not empty')).toBe(false)
    expect(isEmpty({im: "obj"})).toBe(false)
  });
});
let data = {search: "searchQuery"}
describe('validateSearchInput validation', () => {
  it("returns an obj, it has isValid(boolean) and errors(){}",() => {
    expect(typeof validateSearchInput(data)).toBe("object")
    expect(validateSearchInput(data).isValid).toBe(true)
    expect(typeof validateSearchInput(data).errors).toBe("object")
  })
})