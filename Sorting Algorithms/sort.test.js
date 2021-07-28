const mergeClass = require('./merge');
const quickClass = require('./quick');

const { merge } = mergeClass;
const { quick } = quickClass;

describe('Test merge sort algo', () => {
  test('empty case', () => {
    expect(merge([])).toStrictEqual([]);
  });

  test('single case', () => {
    expect(merge([1])).toStrictEqual([1]);
  });

  test('double case', () => {
    expect(merge([2, 1])).toStrictEqual([1, 2]);
  });

  test('odd case', () => {
    expect(merge([4, 3, 6, 1, 7])).toStrictEqual([1, 3, 4, 6, 7]);
  });

  test('even case', () => {
    expect(merge([4, 3, 7, 5])).toStrictEqual([3, 4, 5, 7]);
  });

  test('repeat case]', () => {
    expect(merge([1, 3, 3, 3, 2, 5, 7, 5,])).toStrictEqual([1, 2, 3, 3, 3, 5, 5, 7]);
  });
});

describe('Test quick sort algo', () => {
  test('empty case', () => {
    expect(quick([])).toStrictEqual([]);
  });

  test('single case', () => {
    expect(quick([1])).toStrictEqual([1]);
  });

  test('double case', () => {
    expect(quick([2, 1])).toStrictEqual([1, 2]);
  });

  test('odd case', () => {
    expect(quick([4, 3, 6, 1, 7])).toStrictEqual([1, 3, 4, 6, 7]);
  });

  test('even case', () => {
    expect(quick([4, 3, 7, 5])).toStrictEqual([3, 4, 5, 7]);
  });

  test('repeat case]', () => {
    expect(quick([1, 3, 3, 3, 2, 5, 7, 5,])).toStrictEqual([1, 2, 3, 3, 3, 5, 5, 7]);
  });
});