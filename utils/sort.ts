export function sortedArrayInsert<T = any>(
  sortedArray: T[],
  item: T,
  sort: (a: T, b: T) => number
): T[] {
  const length = sortedArray.length;
  let low = 0;
  let high = length - 1;

  while (low <= high) {
    const index = Math.ceil((low + high) / 2);
    const current = sortedArray[index];
    const compare = sort(current, item);
    if (compare === 0) {
      sortedArray.splice(index, 0, item);
      return sortedArray;
    }
    if (compare < 0) low = index + 1;
    else high = index - 1;
  }

  sortedArray.splice(low, 0, item);
  return sortedArray;
}
