export const isPalindrome = (word: string): boolean => {
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanWord === cleanWord.split('').reverse().join('');
}
