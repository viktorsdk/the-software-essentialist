import { isPalindrome } from './index';

describe('palindrome checker', () => {
    it.each([
        ['mom', true],
        ['Mom', true],
        ['MoM', true],
        ['Momx', false],
        ['xMomx', true],
        ['Was It A Rat I Saw', true],
        ['Never Odd or Even', true],
        ['Never Odd or Even1', false],
        ['1Never Odd or Even1', true],
    ])('should return %p for %p', (input, expected) => {
        expect(isPalindrome(input)).toBe(expected);
    })
})
