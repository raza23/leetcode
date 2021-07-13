var secondLargest = function(arr) {
  let largest = 0;
  let second = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }

  return secondLargest;
};
