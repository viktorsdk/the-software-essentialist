import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    // refactor using it.each()
    it.each([3, 6, 9, 12, 18, 21, 24, 27, 33, 36, 39, 42, 48, 51, 54, 57, 63, 66, 69, 72, 78, 81, 84, 87, 93, 96, 99])("returns Fizz if the number is %i", (number) => {
        expect(fizzbuzz(number)).toBe("Fizz");
    })

    it.each([5, 10, 20, 25, 35, 40, 50, 55, 65, 70, 80, 85, 95, 100])("returns Buzz if the number is %i", (number) => {
        expect(fizzbuzz(number)).toBe("Buzz");
    })

    it.each([15, 30, 45, 60, 75, 90])("returns FizzBuzz if the number is %i", (number) => {
        expect(fizzbuzz(number)).toBe("FizzBuzz");
    })

    it.each([0, 101])("throws an error if the number is %i", (number) => {
        expect(() => fizzbuzz(number)).toThrowError("Number must be greater than 0");
    })

    it.each(["hello" as unknown as number])("throws an error if the input is not a number", (number) => {
        expect(() => fizzbuzz(number)).toThrowError("Input must be a number");
    })

    it.each([1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19, 22, 23, 26, 28, 29, 31, 32, 34, 37, 38, 41, 43, 44, 46, 47, 49, 52, 53, 56, 58, 59, 61, 62, 64, 67, 68, 71, 73, 74, 76, 77, 79, 82, 83, 86, 88, 89, 91, 92, 94, 97, 98])("returns the number if the number is %i", (number) => {
        expect(fizzbuzz(number)).toBe(number.toString());
    })
});
