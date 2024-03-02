import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("returns Fizz if the number is 3", () => {
        expect(fizzbuzz(3)).toBe("Fizz");
    });
});
