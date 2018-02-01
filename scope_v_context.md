Scope - pertains to visibility of variables
  - achieved through use of functions
  - variables declared inside function are private, available only within function
  - but "inner" functions have access, variables are "in-scope"

  closures - combination of function and environment that function was declared
    - local variable declared outside of function is accessible inside the closure
    - any variables in-scope at time closure declared remain available even after it leaves the scope in which it was declared
    - closures maintain a reference to the environment it was created when these
      variables existed
    - good for privatizing variables/data encapsulation (only the closure has reference to variable)
      and currying functions (breaking down function that takes multiple arguments
      into series of functions that take part of the arguments)

Context - refers to the object within which a function is executed
  - JS keyword "this" refers to object the function is executing in
  - reference to the property that belongs to the object
  - ex: if object "foo" has a method "bar", when "this" is used inside "bar"
    "this" refers to "foo", if "bar" is executed in global scope, "this" refers
    to the window object
  - #call() or #apply() methods can alter context within which a function is executed

https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/
