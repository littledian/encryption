import { sortedArrayInsert } from '@/utils/sort';

test('test utils/sort:sortedArrayInsert', () => {
  const array = [1, 5, 3, 12, 300, 201, 21, 12, 35];
  let sortedArray: number[] = [];
  for (const item of array) {
    sortedArray = sortedArrayInsert(sortedArray, item, (a, b) => a - b);
  }

  expect(sortedArray).toEqual([1, 3, 5, 12, 12, 21, 35, 201, 300]);
});
