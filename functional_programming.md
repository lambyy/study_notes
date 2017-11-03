# Functional Programming and Distributed Data

Why should you care?
  - makes your code understandable
  - parallelizable, split large task into small subtasks that can be run in parallel

What is functional programming?
  - style of programming in which pure functions are the main unit of computation
  - think jQuery vs React
    - jQuery sequence of instructions (append, remove)
    - React components are just functions
  - possible in most languages, but easier in some

What makes a function pure?
  - no side effects
    - e.g ajax request, writing to db, printing, changing external state
  - same input -> same output
  - purity requires immutablility

How can we do anything useful?
  - functional core, imperative shell (business logic part of code is almost completely pure functions)
  - Redux
    - model state changes as pure reducers
    - your code never mutates state
  - React
    - model UI as pure components
    - your code never mutates DOM

Understandable
```
const x = impureThing(a, b);    
// no idea what is does, could do anything
const x = pureThing(a, b);      
// know exactly what it does, and what it doesn't do, only takes a & b and returns something
```
  - impure functions have hidden inputs and outputs
    - hidden inputs: mutable dependencies
    - hidden outputs: side effects
  - impure functions are often coupled in invisible ways
  - pure functions require all inputs/outputs to be explicit
  - calling a pure function can never break other code
  - values that change over time are difficult to keep track of
  - tiramisu example

Parallelizable
  - can't parallelize if we don't understand dependencies between steps
  - avoid shared mutable state

Apache Spark
  - "fast/general engine for large-scale data processing"
  - RDD

Why doesn't everybody do this?
  - historical limitations in memory, functional programming uses more memory
  - parallelism has only been needed recently
  - entrenched in education/language design
  - doesn't always align with real world perception
  - but things are changing!

What next?
  - JS
    - Brian Lonsdorf
      - Oh Composable world
      - Egghead series
    - Immutable.js
      - Explanation video
  - Elm
    - Tutorial

Performance
  - takes times and memory
  - "if you want fast, start with comprehensible" Paul Phillips
  - lazy evaluation
    - doing work at the latest, most efficient way possible

````
[1, 2, 3, 4, 5]
  .filter(x => x % 2 !== 0)
  .map(x => x * x)
  [1];

import { Seq} from 'immutable';
Seq([1, 2, 3, 4, 5])
  .filter(x => x % 2 !== 0)
  .map(x => x * x)
  .get(1);
````

  - memoization, using cached values
