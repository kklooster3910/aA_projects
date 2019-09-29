function twoNumberSum(array, targetSum) {
  let memoizedNums = new Set();
  for (num of array) {
    const possibleMatch = targetSum - num;
    // debugger;
    if (memoizedNums.has(possibleMatch)) {
      return [possibleMatch, num].sort((x, y) => x - y);
    } else {
      memoizedNums.add(num);
    }
  }
  return [];
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));