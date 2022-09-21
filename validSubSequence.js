//Hint: use two pointers, 1 at sequence and 1 at array, match each elements from each array, if they match, move to next pointer , if they donot match check for next element in the array
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqPointer = 0;
  let arrayPointer = 0;

  while (
    seqPointer <= sequence.length - 1 &&
    arrayPointer <= array.length - 1
  ) {
    if (sequence[seqPointer] !== array[arrayPointer]) {
      arrayPointer++;
    } else if (sequence[seqPointer] === array[arrayPointer]) {
      seqPointer++;
      arrayPointer++;
    }
  }
  if (seqPointer === sequence.length) {
    return true;
  }
  return false;
}

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
