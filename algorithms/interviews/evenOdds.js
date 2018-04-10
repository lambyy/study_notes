// In a given array, move all even numbers to left and odd numbers to
// right without using an extra array

function evenOdd(arr) {
  let x = 0;
  let y = 1;

  while (y < arr.length) {
    if (arr[x] % 2 !== 0) {
      if (arr[y] % 2 === 0) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
        x++;
      }
    } else {
      x++;
    }
    y++;
  }

  return arr;
}

// console.log(evenOdd([2, 1, 5, 7, 6, 8, 9]));
// console.log(evenOdd([2, 1, 2, 9, 9, 5, 7, 6, 8, 9]));
// console.log(evenOdd([2, 1, 2, 9, 0, 6, 8, 9]));
// console.log(evenOdd([1, 2, 2, 2, 2, 2, 2]));
// console.log(evenOdd([2, 1, 1, 1, 1, 2]));
// console.log(evenOdd([]));
