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
//brute force method 
function twoNumberSum(array, targetSum) {
  if(!array.length) {
    return
  }
  // Write your code here.
  for(let i=0; i<array.length; i++) {
    for(let j =1; j<array.length && i !== j; j++) {
      if(array[i] + array[j] === targetSum) {
        return [array[i], array[j]]
      }
    }
  }
  return []
}

//using sort and pointers 
function twoNumberSum(array, targetSum) {
  // Write your code here.
  //sort the array 
  array.sort((a,b) => (a-b))
  //initialize left and right pointers 
  let l =0;
  let r = array.length - 1;
  // compare elements at left and right indices 
  while(l < r) {
    const currentSum = array[l] + array[r]
    if(currentSum < targetSum) {
    l++
    }else if(currentSum > targetSum) {
      r--
    }else if(currentSum === targetSum) {
      return [array[l], array[r]]
    }
  }
  return []
}

// Hint : x + y = target
// y = target - x

// using exitence map 
function twoNumberSum(array, targetSum) {
  // Write your code here.
  if(!array.length) {
    return
  }
  const existenceMap = {}
  for(let i=0; i<array.length; i++) {
    const val = targetSum - array[i]
    console.log('val ',val)
    if(existenceMap.hasOwnProperty(array[i])) {
      return [array[i], val]
    }else {
      existenceMap[val] = true
    }
  }
  return []
}

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
