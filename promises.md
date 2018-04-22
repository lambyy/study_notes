# Promises

"Producing" code is code that does something and needs time to complete its task. "Consuming" code is code that uses the result of the "producing" code when it is ready. A Promise is a special JS object that links the two together so that "consuming" code can "subscribe" to the result of the "producing" code. ("Consuming" code will wait until "Producing" code is comes back with a result)

```
  // syntax

  let promise = new Promise(function(resolve, reject) {
      ... executor code (does some job that usually takes some time to complete, then calls either resolve or reject fn)
    })

  // resolve & reject are fn's provided by JS engine, call when executor completes
```

A promise is automatically called when created (the fn passed to `new Promise(fn)` is immediated called).

`new Promise(fn)` returns a promise object that has `state` and `result` properties. These properties are internal & cannot be directly accessed from code.
  - `state` property can have 3 values: "pending", "fullfilled" or "rejected"
  - `result` property is initially undefined

When executor completes, the fn should call:
  - `resolve(value)` with result returned from the asynchronous fn, this will set `state` to "fullfilled" and `result` to `value`
  - `reject(error)` with the error returned from the asynchronous fn, this will set `state` to "rejected" and `result` to the `error` object

The executor can only call one `resolve` or `reject`, the promise `state` change is final. In other words, if multiple `resolve`s or `reject`s are called, only the first call will be executed, further calls will be ignored.

`resolve` & `reject` will only use the first argument if more than one are provided

"Consuming" fn's register to "Producing" fn's using `#then` & `#catch` handlers
```
  promise.then(fn(result), fn(error));
  // alternatively
  promise.then(fn(result))
         .catch(fn(error));
```

`#then` & `#catch` handlers:
  - execute immediately when the promise settles & are always asynchronous
  - return a promise, which allows chaining
  - return value of a handler becomes the result of the promise
  - if return value is a promise, further execution is suspended until the promise settles, the result of that promise will be given to the next handler
  - otherwise the value is immediately passed to the next handler

`#then` returns a "thenable" object, any object with a `#then` method can be treated as a promise

`fetch(url)` - makes a network request & returns a promise
  - resolves with a response object when server responds with headers BUT before full respond is downloaded
  - `response.text()` or `response.json()` return promise object that resolves when full text/json downloaded with the text/json as the result
  ```
    // commonly seen:

    fetch(some.url)
      .then(response => response.json());
  ```

  ASYCHRONOUS ACTIONS SHOULD ALWAYS RETURN A PROMISE

  When a promise rejects, control jumps to closest rejection(`#catch`) handler down the chain

Promise API:
  - `Promise.resolve(value)` returns resolved promise object with given value as result
  - `Promise.reject(error)` returns rejected promise object with given error as result
  - `Promise.all(iterable)` runs many promises in parallel & waits until all the promises are ready
    - returns new promise that resolves when all promises/fn's in interable are settled
    - the result of that promise is an array contains the results of all settle promises/fn's in the iterable
    - rejects with error if any promise in the iterable is rejected
    - no way to abort other promise execution, so all promises continue to execute, but results will be ignored
    - custom implementation of `Promise.all`:  https://github.com/lambyy/study_notes/blob/master/algorithms/interviews/WW2.js
  - `Promise.race(iterable)` same as `#all` but only waits for the first promise to settle

source: https://javascript.info/promise-basics
