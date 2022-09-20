//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.

//   Note that the target sum has to be obtained by summing two different integers
//   in the array; you can't add a single integer to itself in order to obtain the
//   target sum.

//   You can assume that there will be at most one pair of numbers summing up to
//   the target sum.

//   array =  = [3, 5, -4, 8, 11, 1, -1, 6]
//   targetSum = 10

//   output = [-1, 11]

//sol

function twoNumberSum(array, targetSum) {
  // Write your code here.
  if (!array.length) {
    return;
  }
  let map = arrayMap(array);
  for (let i = 0; i < array.length; i++) {
    const val = targetSum - array[i];
    if (map[val] && i !== map[val]) {
      console.log([array[i], array[map[val]]]);
      return [array[i], array[map[val]]];
    }
  }
  return [];
}

function arrayMap(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  return map;
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10);
