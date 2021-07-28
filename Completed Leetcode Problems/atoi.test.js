const atoiClass = require('./atoi');
const { atoi } = atoiClass;

describe('Test atoi function', () => {
  test('42 should return 42', () =>{
    expect(atoi('42')).toBe(42);
  });

  test('   -42 should return -42', () => {
    expect(atoi('   -42')).toBe(-42);
  });

  test('4193 with words to return 4193', () => {
    expect(atoi('4193 with words')).toBe(4193);
  });

  test('words and 987 to return 987', () => {
    expect(atoi('words and 987')).toBe(0);
  });

  test('-91283472332 to return -91283472332', () => {
    expect(atoi('-91283472332')).toBe(-2147483648);
  });

  test('-+12 to return 0', () => {
    expect(atoi('-+12')).toBe(0);
  });

  test('+1 to return 1', () => {
    expect(atoi('+1')).toBe(1);
  });
});