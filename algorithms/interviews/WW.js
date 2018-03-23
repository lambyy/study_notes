// function that takes a string of characters and numbers
// if it's a number, go forward that amount
// if R, turn 90 degress to the right
// if L, turn 90 degrees to the left

// return the total grid distance from where you start to where you end up

// '4RR4'
// 0

// start facing right:
// 1. move four units forward (move to [0,4])
// 2. turn right 90 degrees (face down)
// 3. turn right 90 degrees (face left)
// 4. move four units forward (move to [0,0])

// '4R3'
// 5

// '4R4R4R2'
// 2

// '43'
// 7

// '433R'
// 10

// 'RLRLRL2'
// 2

const cardinal = ['N', 'E', 'S', 'W'];
const mapping = {
  N: [0, 1],
  E: [1, 0],
  S: [0, -1],
  W: [-1, 0]
};

function navigation(directions) {
  let steps = directions.split("");
  let pos = [0, 0];
  let nav = 'N';

  steps.forEach(step => {
    if(step === 'R' || step === 'L') {
      nav = rotate(step, nav);
    } else {
      let move = mapping[nav];
      pos = [pos[0] + (move[0] * step), pos[1] + (move[1] * step)];
    }
  });

  return Math.sqrt(Math.pow(pos[0], 2) + Math.pow(pos[1], 2));
}

function rotate(dir, current) {
  let currentIdx = cardinal.findIndex(item => item === current);
  let newIdx = (dir === 'R') ? currentIdx + 1 : currentIdx - 1;
  newIdx = newIdx % 4;
  if (newIdx < 0) newIdx = 3;
  return cardinal[newIdx];
}

console.log(navigation('433R'));
console.log(navigation('RLRLRL2'));
