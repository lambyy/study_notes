# JavaScript

### Data Types
  - Primitives: Boolean, Null, Undefined, Number, String, Symbol (new in ES6)
  - Objects

### Falsey values
  - undefined
  - null
  - NaN
  - 0
  - -0
  - ""
  - false

use `===` and `!==` for checking equality, `==` uses tricky, unreliable type conversion

`instanceof` - tell what type of class/object it is

`typeof`- tell what time of object, string it is

```
function Cat() {}
const cat = new Cat();
cat instanceof Cat        // true
typeof cat                // object
typeof "cat"              // string
```

### Syntax
  - must use explicit returns
  - must use parentheses in `if`, loops, function calls, declarations
  - end all expressions with `;` (mainly assignments and function calls)

### Objects
  - used like ruby hash
  - POJOs - Plain Old JavaScript Objects
  - can have functions as values
  - access object attributes with `[]` or dot notation

```
const cat = {
  name: "Tiger",
  meow() {
    console.log("Short hand assignment")
  },
  posterPhrase: function () {
    console.log("Normal notation")
  }
};
```

### Constructor functions
  - use to create new objects
  - when constructor called with `new` keyword, `this` is set to a blank object and `__proto__` property is assigned to constructor's prototype
  - instance methods are added to the prototype of an object
  - equivalent of Ruby class methods are called static methods
  - if method is not present on an object, it will look at the `__proto__`
  - if method is not on the `__proto__` it will look at the constructor's `__proto__`

```
const Cat = function(name) {
  this.name = name;
}

const kitty = new Cat("kitty")

Cat.prototype.meow = function() {
  console.log(`${this.name} says: MEOW`)
}

let felix = new Cat("felix")
felix.meow()
```

arrow functions preserve the `this` at the time of construction

### Functions
  - functions are first class Objects
    - can be passed to a function as an argument
    - can be returned by another function
    - store in a variable
    - stored in a data structure
  - common to pass functions to other functions
  - can use anonymous functions as arguments (like blocks in Ruby but better!)
  - parentheses are required to invoke functions
    - function style
      ```
      functionName(arg1);
      ```
    - method-style
      ```
      objectName.functionName(arg1);
      ```
    - constructor-style
      ```
      new Object()
      ```

### Variables and Scope
  - `let` and `const` are block scoped
  - `var` is function scoped - don't use it

```
function timeMe() {
  for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}

timeMe()        // returns 4, 4 times
                // setTimeout keeps a reference to i
```

scope is what variables are accessible in a given place in the code

### this
  - like Ruby's self
  - not implicit
  - value of `this` referred to as the function's `Context`
  - if a function is invoked on an instance object, `this` is set as that instance

### Closure
  - a function that stores a reference to a variable outside of the function that wasn't passed in
  - a function which accesses variables that were neither passed in nor defined inside that function
    - free variables: variables neither declared, nor passed in as arguments to a function
    - a closure is a function that captures "free variables"

### Callbacks
  - function that is passed to another function
  - can be as simple as passing a function to `forEach()`

### Ruby vs JS
  see comparison chart https://appacademy.github.io/curriculum/language_comparison/index.html

### JS Promises

https://scotch.io/tutorials/javascript-promises-for-dummies
