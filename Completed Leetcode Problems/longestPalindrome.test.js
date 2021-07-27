const longestPalindromeClass = require('./longestPalindrome');
const { isPalindrome, longestPalindrome } = longestPalindromeClass;

describe('Test isPalindrome function', () => {
  test('return true for 5 letter palindrome', () => {
    expect(isPalindrome('babab')).toBe(true);
  });

  test('return false for 5 letter not palindrome', () => {
    expect(isPalindrome('abcde')).toBe(false);
  });

  test('return true for 1 letter word', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('return true for 4 letter palindrome', () => {
    expect(isPalindrome('baab')).toBe(true);
  });

  test('return false for 4 letter not palindrome', () => {
    expect(isPalindrome('abcd')).toBe(false);
  });
});

describe('Test longestPalindrome function', () => {
  test('return babab for babab', () => {
    expect(longestPalindrome('babab')).toBe('babab');
  });

  test('return bab for babad', () => {
    expect(longestPalindrome('babad')).toBe('bab');
  });

  test('return bb for cbbd', () => {
    expect(longestPalindrome('cbbd')).toBe('bb');
  });

  test('return a for a', () => {
    expect(longestPalindrome('a')).toBe('a');
  });

  test('return a for ac', () => {
    expect(longestPalindrome('ac')).toBe('a');
  });

  test('return bb for bb', () => {
    expect(longestPalindrome('bb')).toBe('bb');
  });

  test('return aaaa for aaaa', () => {
    expect(longestPalindrome('aaaa')).toBe('aaaa');
  });
});