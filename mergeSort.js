function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  } else {
    let mid = arr.length / 2;
    let firstPart = arr.slice(0, mid);
    let secondPart = arr.slice(mid, arr.length);

    const firstArr = mergeSort(firstPart);
    const secondArr = mergeSort(secondPart);

    let result = [];
    let i = 0;
    let j = 0;

    while (i !== firstArr.length && j !== secondArr.length) {
      if (firstArr[i] <= secondArr[j]) {
        result.push(firstArr[i]);
        i += 1;
      } else {
        result.push(secondArr[j]);
        j += 1;
      }
    }

    for (; i < firstArr.length; i++) {
      result.push(firstArr[i]);
    }
    for (; j < secondArr.length; j++) {
      result.push(secondArr[j]);
    }

    return result;
  }
}
mergeSort([105, 79, 100, 110]);
