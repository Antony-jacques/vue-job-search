import { evenOrOdd, multiply } from "@/playground";

// describe allow to describe what we are testing. It is optional -> organisation ...

describe("basic math", () => {
  // it does this
  it("adds two numbers", () => {
    //assertion = prediction of what will happen
    expect(1 + 1).toBe(2);
  });

  describe("even or odd umber", () => {
    describe("When thenumber is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(6)).toBe("Even");
      });
    });
    describe("when the number is odd", () => {
      it("indicates the number is odd", () => {
        expect(evenOrOdd(5)).toBe("Odd");
      });
    });
  });

  describe("multiply", () => {
    it("multiply two numbers together", () => {
      expect(multiply(3, 5)).toBe(15);
    });
  });
});
