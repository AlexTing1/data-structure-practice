const minDifferenceClass = require('./minDifference');
const { minDifference } = minDifferenceClass;

describe('Test minDifference function', () => {
  test('[5,3,2,4] should return 0', () =>{
    expect(minDifference([5,3,2,4])).toBe(0);
  });

  test('[1,5,0,10,14] should return 1', () => {
    expect(minDifference([1,5,0,10,14])).toBe(1);
  });

  test('[6,6,0,1,1,4,6] should return 2', () => {
    expect(minDifference([6,6,0,1,1,4,6])).toBe(2);
  });

  test('[1,5,6,14,15] should return 1', () => {
    expect(minDifference([1,5,6,14,15])).toBe(1);
  });

  test('[82,81,95,75,20] should return 1', () => {
    expect(minDifference([82,81,95,75,20])).toBe(1);
  });

  test('[20,66,68,57,45,18,42,34,37,58] should return 31', () => {
    expect(minDifference([20,66,68,57,45,18,42,34,37,58])).toBe(31);
  });
});