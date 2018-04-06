function connellSequence(n) {     // 5
  if (n < 1) return [];

  const result = [1];   // [1, 2, 4, 5, 7]
  let i = 1;
  let num;
  let require = 2;  // 3
  let count = 0;    // 2

  while (i < n) {     // i = 5; n = 5
    if(count === 0) {
      num = result[result.length - 1] + 1;      //
    } else {
      num = result[result.length - 1] + 2;      //
    }

    result.push(num);
    count++;

    if(count === require) {
      count = 0;
      require++;
    }

    i++;
  }

  return result;
}

console.log(connellSequence(10));
