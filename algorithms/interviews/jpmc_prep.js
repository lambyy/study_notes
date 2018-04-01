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

function mergeSort(array) {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

// console.log(mergeSort([9, 3, 2, 7]));
// console.log(mergeSort([0, 4, 6, 9]));
// console.log(mergeSort([9, 11, -8, 15]));

// Acquire JS/Creating module?

// Set:
// let animals = new Set();
let animals = new Set(["dog", "cat"]);  // initializing with iterable will deconstruct into elements
animals.add(4);
animals.add("elephant");
animals.add("cat");   // can add any items into set, but will only hold unique values
console.log(animals);
console.log(animals.size);    // "length" of set
animals.delete(4);
console.log(animals);
animals.has("elephant");  // return true/false if set contains value
animals.forEach(animal => console.log(animal));
animals.clear();  // clear all values in set
console.log(animals);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

// Map:
// let things = new Map();
let things = new Map([["roses", 2], ["candy", 5]]); // initializing with array of 2 element arrays
things.set("key", "value");
console.log(things);
console.log(things.size);
console.log(things.has("key")); // return true/false if map contains key
console.log(things.get("key")); // returns value of key
things.delete("key");
console.log(things);
things.forEach((value, key) => console.log(key, value));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// Array Sorting:
let array = [5, 7, 9, 3];
let bands = [
  {name: "Maroon 5", genre: "pop"},
  {name: "Imagine Dragons", genre: "punk"},
  {name: "Fallout Boy", genre: "punk"}
];
array.sort(); // sorts elements by converting to string and sorting by string unicode, mutates array
array.sort((a, b) => a - b); // for number sort
bands.sort((a, b) => a.genre > b.genre); // sort based on band genres alphabetically (using > for strings)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// CSS:

// Dynamics (using window size, media query, responsiveness):
document.getElementById('square').className += " red" // add a class to HTML element

// CSS selector to apply rules under specified conditions
// @media screen and (max-width: 1140px) {
//   font-size: 10px;
// }

// Never use absolute pixel widths or positioning.
// Everything should be relative to screen size.
// Always do Mobile First design.
// width: 100% to fit your spot
// 80vw to use percentage of the total viewport width.
// window.innerWidth & window.innerHeight return window dimensions

// CSS Selector Hierarchy
// Most specific or last declared will win if all is equal.

// !important (!important) next to a property - don't use!
// inline styling (style = "color: orange;")- not DRY, overwrites classes, etc.
// id (#cat) - better to use class because should only be 1 ID per page. Doesn't allow for reuse
// class (.dog)
// element (<p>)

// Selecting properties
let element = document.querySelect(".element");
// Overwrite style properties with JS:
element.style.color = "blue";
element.style.backgroundColor = "purple";
// or
element.style = "color: blue; background-color: purple;"


// Event triggering, delegation, & bubbling
let button = document.querySelector("button");
function once() {
  console.log("Done.");
  button.removeEventListener("click", once);
}

button.addEventListener("click", once);
// event triggers once, then is listener is removed by calling removeEventListener with same fn name

function getInfo(event) {
  console.log(event)
} // to obtain information on event

button.onclick = () => { code }
// also: onmousedown, onmouseenter, onmousemove, etc

// bubbling: events on children events bubble up to trigger events on parent elements
event.stopPropagation(); // to stop event bubbling to parents, does not prevent event triggering in siblings

// event delegation
// put one listener on a parent
// use event.target figure out which specific element was clicked specifics & handle accordingly
// event.target is the concrete element inside the form that actually was clicked.
// event.currentTarget is the element the handler is on

event.preventDefault(); // prevents default action of browser

// trigger click in JS with element.click();
