import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("returns Fizz if the number is 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });

    it("returns Buzz if the number is 5", () => {
        expect(fizzbuzz(5)).toBe("Buzz");
    })

    it("returns FizzBuzz if the number is 15", () => {
        expect(fizzbuzz(15)).toBe("FizzBuzz");
    })

    it("throws an error if the number is 0", () => {
        expect(() => fizzbuzz(0)).toThrowError("Number must be greater than 0");
    })

    it("throws an error if the number is larger than 100", () => {
        expect(() => fizzbuzz(101)).toThrowError("Number must be less than 100");
    })

    it ("throws an error if the input is not a number", () => {
        expect(() => fizzbuzz("hello" as unknown as number)).toThrowError("Input must be a number");
    })
});
