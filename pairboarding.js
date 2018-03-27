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
    let j = i + 1;
    let substring = str1.slice(i, j);
    while(str2.indexOf(substring) >= 0 && j < str1.length) {
      j++;
      substring = str1.slice(i, j);
    }
    if(substring.length - 1 > longest.length) longest = substring.slice(0, -1);
  }
  return longest;
}

// console.log(longestCommonSubstring("hello there", "let there be light"));
// console.log(longestCommonSubstring("whatdoyoumean?", "howdoyoudo"));

// sum_rec
