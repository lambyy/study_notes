// console.log([1,2,3,4].reduce((accumulator, current) => accumulator + current, 10))
// console.log(['a','b','c'].reduce((accumulator, current) => accumulator + current))

// const myReduce = (array, cb, initialVal) => {
//   let accumulator = initialVal;
//   array.forEach(el => {
//     accumulator = cb(accumulator, el);
//   });
//
//   return accumulator;
// }

const myReduce = (array, cb, initialVal) => {
  if(array.length < 1) return initialVal;
  if(array.length === 1) return cb(initialVal, array[0]);

  let prevReduce = myReduce(array.slice(0, -1), cb, initialVal);
  prevReduce = cb(prevReduce, array[array.length -1]);
  return prevReduce;
};

// function add(accumulator, current) {
//   return accumulator + current;
// }

// console.log(myReduce([1, 2, 3, 4], add, 10));
// console.log(myReduce(['a', 'b', 'c'], add, 'z'));

const wait = (delay) => new Promise((resolve) => {
  setTimeout(() => resolve(delay), delay);
});

// wait(1000)
//   .then((res) => console.log(`I waited ${res} ms`));

// Promise.all([
//   wait(100),
//   wait(200),
//   wait(50)
// ])
//   .then(console.log)

const myPromiseAll = (array) => {
  return new Promise((resolve) => {
    let result = [];
    let counter = 0;
    array.forEach((el, idx) => {
      el.then(res => {
        result[idx] = res;
        counter++;
      }).then(() => {
          // let done = true;
          // for(let i = 0; i < array.length; i++) {
          //   if(!result[i]) done = false;
          // }

          // if(done) resolve(result);
          if(counter === array.length) resolve(result);
        });
    });

  });
};

myPromiseAll([
  wait(100),
  wait(200),
  wait(50)
])
  .then(console.log);
