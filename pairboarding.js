// digital root

// Write a method, digital_root(num). It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.

function digitalRoot(num) {
  if(num < 10) {
    return num;
  } else {
    let sum = 0;
    while(num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return digitalRoot(sum);
  }
}

// console.log(digitalRoot(3));
// console.log(digitalRoot(123));
// console.log(digitalRoot(456));

// caesar cipher

// Write a function that takes a message and an increment amount and
// outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation. Preserve spaces.

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

function caesarCipher(msg, shift) {
  return msg.split("").map(char => {
    if(char === " ") return " ";
    let initialIdx = alphabet.indexOf(char);
    let newIdx = (initialIdx + shift) % alphabet.length;
    return alphabet[newIdx];
  }).join("");
}

// console.log(caesarCipher("hello there", 1));
// console.log("abcd", 7);

// common substrings

// Write a function, longest_common_substring(str1, str2) that takes two
// strings and returns the longest common substring. A substring is defined
// as any consecutive slice of letters from another string.

function longestCommonSubstring(str1, str2) {
  let longest = "";
  for(let i = 0; i < str1.length; i++) {
    let j = i + longest.length + 1;
    while(j < str1.length + 1) {
      let substring = str1.slice(i, j);
      if(str2.indexOf(substring) >= 0) longest = substring;
      j++;
    }
  }
  return longest;
}

// console.log(longestCommonSubstring("hellothere", "let there be light"));
// console.log(longestCommonSubstring("whatdoyoumean?", "howdoyoudo"));

// String.slice(beginIdx[, endIdx])
// zero-based index to start extraction, if negative treated as strLength + beginIdx
// if beginIdx >= strLength, returns empty String
// endIdx is zero-based index to end extraction, char at this index not included
// slice to end if omitted, treated as strLength + endIdx if negative

// sum_rec

// Write a function that takes an array of integers and returns their sum. Use recursion.

function sumRec(arr) {
  if(arr.length < 1) {
    return 0;
  } else {
    return arr[0] + sumRec(arr.slice(1));
  }
}

// function sumRec(arr) {
//   if(arr.length < 1) {
//     return 0;
//   } else if(arr.length === 1) {
//     return arr[0];
//   } else {
//     let a = arr.pop();
//     let b = arr.pop();
//     arr.push(a + b);
//     return sumRec(arr);
//   }
// }

// console.log(sumRec([1, 2, 3]));
// console.log(sumRec([4, 5, 6]));
// console.log(sumRec([11, 19, 21, 3, 5]));

// fibs

// Write a function, fibs(num) which returns the first n elements from
// the fibonnacci sequence, given n.
// Solve it both iteratively and recursively.

function fibsIterative(n) {
  const fibs = [0, 1];
  if(n < 3) return fibs.slice(0, n);

  while(fibs.length < n) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }

  return fibs;
}

function fibsRecursive(n) {
  const fibs = [0, 1];
  if(n < 3) return fibs.slice(0, n);

  const prevFib = fibsRecursive(n - 1);
  prevFib.push(prevFib[prevFib.length - 1] + prevFib[prevFib.length -2]);
  return prevFib;
}

// console.log(fibsIterative(5));
// console.log(fibsIterative(10));
// console.log(fibsRecursive(5));
// console.log(fibsRecursive(10));
