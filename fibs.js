// Iteration method of Fibonacci sequence
function fibs(num) {
  let result = [0, 1];

  let counter = 2;
  // Since 2 elements of sequence already in array (by default of Fibonacci sequence), subtracting 2 of them
  for (let i = result[0], j = result[1]; counter < num - 2; counter++) {
    result.push(i + j);
    i = j;
    j = result.at(-1);
  }

  console.log(result);
  return result;
}

// fibs(10);

// Fibonacci sequence using recursion
function fibsRec(num, arr = [0, 1]) {
  if (num < 2) return arr;
  arr.push(arr.at(-1) + arr.at(-2));
  return fibsRec(num - 1, arr);
}

fibsRec(10);
