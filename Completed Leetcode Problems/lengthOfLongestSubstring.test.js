const lengthOfLongestSubstringClass = require('./lengthOfLongestSubstring');
const { checkLetterDuplicates, isInTracker, lengthOfLongestSubstring } = lengthOfLongestSubstringClass;

describe('Test checkLetterDuplicates function', () => {
  test('return true when there is duplicate letter in middle', () => {
    expect(checkLetterDuplicates('aeest')).toBe(true);
  });

  test('return true when there is duplicate letter in beginning', () => {
    expect(checkLetterDuplicates('ttesa')).toBe(true);
  });

  test('return true when there is a duplicate letter in the end', () => {
    expect(checkLetterDuplicates('aestt')).toBe(true);
  });

  test('return false when there is no duplicate letters', () => {
    expect(checkLetterDuplicates('abcdef')).toBe(false);
  });

  test('empty string should return false', () => {
    expect(checkLetterDuplicates('')).toBe(false);
  });

  test('single letter should return false', () => {
    expect(checkLetterDuplicates('a')).toBe(false);
  });
});

describe('Test isInTracker function', () => {
  test('return true if array coords is in tracker coords', () => {
    expect(isInTracker([1, 5], {
      0: [3, 6],
      1: [0, 2],
      2: [2, 4]
    })).toBe(true);
  });

  test('return true if array coords is equal to tracker coords', () => {
    expect(isInTracker([2, 4], {
      0: [3, 6],
      1: [2, 4],
      2: [1, 2]
    })).toBe(true);
  });

  test('return false if array coords are not in tracker coords', () => {
    expect(isInTracker([2, 3], {
      0: [4, 6],
      1: [1, 2],
      2: [3, 4]
    })).toBe(false);
  });

  test('return true if array coords on lower bound = lower bound trackerObj and upper is within array coords', () => {
    expect(isInTracker([2, 5], {
      0: [1, 2],
      1: [2, 4],
      2: [5, 6]
    })).toBe(true);
  });

  test('return true if array coord on lower bound is within trackerObj and array upper bound is upper bound of trackerObj', () => {
    expect(isInTracker([2, 5], {
      0: [1, 2],
      1: [3, 5],
      2: [6, 7]
    })).toBe(true);
  });
})

describe('Test lengthOfLongestSubstring function', () => {
  test('return abc for abcabcbb', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('return 1 for input bbbbb', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('return 3 for input pwwkew', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  test('return 5 for input bbaqwer', () => {
    expect(lengthOfLongestSubstring('bbaqwer')).toBe(6);
  });

  test('return 0 for empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  test('return 1 for space string', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1);
  })

  test('return 1 for input string with 1 character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  test('return 1 for input string with 2 same character', () => {
    expect(lengthOfLongestSubstring('aa')).toBe(1);
  });

  test('return 2 for input string with no same character', () => {
    expect(lengthOfLongestSubstring('au')).toBe(2);
    expect(lengthOfLongestSubstring('asdfhjklewrio')).toBe(13);
  });
})