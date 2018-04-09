// Maximum Product Subarray
// contiguous subarray with the largest product
// [2, 3, -2, 4] returns [2, 3] with largest product = 6

// key points
// split by zeros => zeros never contribute to the product
// subarrays without zeros have 2 options:
// even negatives => max product would be entire subarray
// odd negatives => max product is formed from one of:
// product from beginning up to & not including last negative
// product from element after first negative to the end
// compare the maxes of the subarrays not including zeros


// Minimum Window Substring
// given strings s & t, find shortest substring in s containing all
// letters in t in O(n) time, return "" if no such substring
// s = "adobecodebanc"
// t = "abc"
// returns "banc"

// key points
// in an array, keep track of indices in s of letters in t and s
// [0, 3, 5] stands for [a, b, c]
// when that array is full (or a counter indicates that all letters in t found)
// take max & min indices to find the substring containing all letters ("adobec")
// continue iterating to find next letter that is also in t
// change the index for that letter in the array
// repeat taking max & min indice to find substring & compare to prev
// [0, 9, 5] ==> "adobecodeb"
// [10, 9, 5] ==> "codeba"
// [10, 9, 12] ==> "banc"

// Jump Game
// array of non-negative integers, initially positioned at first index
// each element represents max jump length at that position
// determine if able to reach last index
// [2, 3, 1, 1, 4] returns true
// [3, 2, 1, 0, 4] returns false

// key points
// able to reach end if no zeros
// if zeros, is there a way to hop over the zero
// starting from the end, iterate and find if zeros, there are ways to hop over

function jumpGame(arr) {
  let zeros = [];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] === 0) {
      zeros.push(i);
    } else {
      zeros.forEach((el, idx) => {
        if (arr[i] + i > el) {
          delete zeros[idx];
        }
      });
    }
  }

  return (zeros.join("") === "" ? true : false);
}

// Number of Islands
// Given nested 2D array of 1's (land) and 0's (water)
// find the number of islands where islands is defined as horizontal
// or vertical connecting 1's, assume grid out of bounds is water

var numIslands = function(grid) {
    let counter = 0;
    let islands = {};

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if(grid[row][col] === "1") islands[[row, col]] = true;
        }
    }

    let visited = [];
    while (Object.keys(islands).length > 0) {
        let pos = Object.keys(islands)[0].split(",").map(num => parseInt(num));
        visited.push(pos);
        delete islands[pos];

        while(visited.length > 0) {
            let adjacent = surrounding(visited.shift());
            adjacent.forEach(adj => {
               if(islands[adj]) {
                   visited.push(adj);
                   delete islands[adj];
               }
            });
        }
        counter++;
    }

    return counter;
};

var surrounding = function(pos) {
    let [x, y] = pos;
    return [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]];
};
