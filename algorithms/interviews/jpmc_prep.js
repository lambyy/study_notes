// Bubble Sort:
// Step through array, swap adjacent elements as needed,
// Continue iterating through array until no more swaps are needed
// O(n^2)

function bubbleSort(array) {
  const result = array.slice();

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i+1]) {
        let temp = result[i];
        result[i] = result[i+1];
        result[i+1] = temp;
        sorted = false;
      }
    }
  }

  return result;
}

// console.log(bubbleSort([9, 3, 2, 7]));
// console.log(bubbleSort([0, 4, 6, 9]));
// console.log(bubbleSort([9, 11, -8, 15]));

// Quick Sort:
// Divide array into two, one with smaller elements, one with larger
// Recursively the two arrays & put back together
// Avg: O(nlog(n)) Worst case: O(n^2) for exactly reversely sorted array

function quickSort(array) {
  if (array.length < 2) return array;

  const mid = array.shift();

  const left = [];
  const right = [];

  array.forEach(el => {
    if (el <= mid) {
      left.push(el);
    } else {
      right.push(el);
    }
  });

  return quickSort(left).concat(mid, quickSort(right));
}

// console.log(quickSort([9, 3, 2, 7]));
// console.log(quickSort([0, 4, 6, 9]));
// console.log(quickSort([9, 11, -8, 15]));

// Merge Sort:
// Divide array into two, sort each half and merge sorted halves together
// O(nlog(n))

function mergeSort() {
  
}
