function sortedSquaredArray(array) {
  //brute force
  //time complexity : o(n log n)
  //space: o(n)
  // Write your code here.
  let resArr = [];
  for (let i = 0; i < array.length; i++) {
    resArr.push(Math.pow(array[i], 2));
  }
  resArr.sort((a, b) => a - b);
  return resArr;
}

function sortedSquaredArray(array) {
  // Write your code here.
  //two pointer method
  //time complexity: o(n)
  //space complexity: 0(n)
  let resArr = Array(array.length).fill(0);
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let resArrPointer = array.length - 1;

  while (resArrPointer >= 0) {
    if (Math.abs(array[rightPointer]) < Math.abs(array[leftPointer])) {
      resArr[resArrPointer] = Math.pow(array[leftPointer], 2);
      leftPointer++;
    } else {
      resArr[resArrPointer] = Math.pow(array[rightPointer], 2);
      rightPointer--;
    }
    console.log("resArrPointer ", resArrPointer);
    resArrPointer--;
  }
  return resArr;
}


sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20])