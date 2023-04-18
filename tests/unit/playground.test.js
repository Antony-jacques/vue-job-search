import { describe, it, expect } from "vitest";

// describe allow to describe what we are testing. It is optional -> organisation ...

describe("basic math", () => {
  // it does this
  it("adds two numbers", () => {
    //assertion = prediction of what will happen
    expect(1 + 1).toBe(2);
  });
});
