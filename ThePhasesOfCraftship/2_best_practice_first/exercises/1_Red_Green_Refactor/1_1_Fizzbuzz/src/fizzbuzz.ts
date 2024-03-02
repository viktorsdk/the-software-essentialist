export const fizzbuzz = (input: number): string|undefined => {
    if (typeof input !== "number") {
        throw new Error("Input must be a number");
    }
    if (input < 1) {
        throw new Error("Number must be greater than 0");
    }
    if (input > 100) {
        throw new Error("Number must be less than 100");
    }
    if (input % 3 === 0 && input % 5 === 0) {
        return "FizzBuzz";
    }
    if (input % 3 === 0) {
        return "Fizz";
    }
    if (input % 5 === 0) {
        return "Buzz";
    }

}
