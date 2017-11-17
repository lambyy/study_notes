Python
  - simple, straight-forward syntax, encourages programming without boilerplate code
  - OOP, not statically typed (don't have to declare variable type)

Python 3
  - more semantically correct, supports newer features
  - difference from Python 2

```
print("hello world")    // print a string

greeting = input("Enter a greeting:")   // prints prompt and waits for input, like Ruby gets
```

Blocks are indicated by indentation, 4 spaces
```
x = 1
if x == 1:
    print("x is 1.")
```

Python supports two types of numbers - integers & floats

mathematical operations, modulo is same as Ruby

```
myint = 7
myfloat = 7.0
myfloat = float(7)

divide = 7 // 2   // integer division, rounds down to nearest whole number

int("900")  // convert string to integer
```

Strings defined with single or double quotes
  - double quotes makes easier to include apostrophes
  - string concatenation is same as Ruby

Simultaneously assignment
`a, b = 1, 2`

`None` in Python is `nil` in Ruby, `null` in JS

Lists & Dictionaries
  - similar to arrays & hashes, zero-indexed
  - accessing an index which does not exist generates an exception
  - array concatenation is same as Ruby

```
mylist = []
mylist.append(1)
mylist.append(2)
mylist[0]
mylist[1]
mylist.remove(2)
del mylist[0]
del mylist[:2]    // delete a slice

myDictionary = {}
myDictionary["something"] = "hello"
myDictionary["something"]
myDictionary.get("blah")  // returns none if word not in dictionary instead of crashing program
del myDictionary["something"]

myDictionary.keys()   // get list of keys in dictionary
myDictionary.values()   // get list of values in dictionary

for x in mylist:
    print(x)
```

string interpolation
`"string %s and %d" % (str_var, num_var)`
  - any object which is not a string can be formatted using %s operator,
  -  the string is formatted as the string that returns from the "repr" method
  - `%s` - String or any object with a string representation
  - `%d` - integers
  - `%f` - floating point numbers
  - `%.<number of digits>f` - float with fixed # of digits to right of the dot
  - `%x/%X` - integers in hex representation (lowercase/uppercase)

String operations
  - `string = "hello world"`
  - `str(number)` - convert number into string
  - `len(string)` - get the length of string
  - `string.index("o")` - location of first occurrence of letter
  - `string.count("l")` - number of l's in string
  - slice formula: variable[start:end+1]
  - `string[3:7]` - "lo w" slice letters from index 3 up to but not including 7
  - `string[:4]` - everything up but not including index 4
  - `string[3:]` - everything from 3 to the end
  - `string[-3:]` - negative numbers start at end of string, 3 chars from the end
  - `string[start:stop:step]`
  - `string[::-1]` - reverse a string
  - `string.upper()`
  - `string.lower()`
  - `string.startswith("hello")` - determines if string starts with, boolean
  - `string.endswith("something")` - determine if string ends with, boolean
  - `string.split(" ")`

Conditions
  - comparators `<`, `<=`, `==`, `>=`, `>`, `!=`
  - assign is ``=``, comparison is ``==``, ``!=``
  - `and`, `or` is equivalent to Ruby &&, ||
  - `in` operator checks if specified object exists within an iterable object container (such as list, like Ruby `includes`)

```
name = "John"
if name in ["John", "Rick"]:
print("Your name is either John or Rick")

```

Python uses indentation to define code Blocks

```
if <statement is="" true="">:
    <do something="">
elif <another statement="" is="" true=">:
    <do something="" else="">
else:
    <do another"" thing="">

ex:

x = 2
if x == 2:
    print("x equals two!")
else:
    print("x does not equal two.")
```

statement is evaluated as true if:
  - `True` boolean variable is given or calculated using expression
  - An object which is not considered "empty" is passed
    - empty string "", empty list [], number 0, & False boolean are "empty" objects

- `is` operator matches instances of variables, not values of variables (`==`)
- `not` operator before a boolean expression inverts

Loops
`for` loop - iterates over given sequence

```
primes = [2, 3, 5, 7]
for prime in primes:
  print(prime)
```
- iterate over sequence of numbers using `range` and  `xrange` functions
- `range` returns new list with numbers of that specified ranges, 0 based - similiar to Ruby (0..4)
- `xrange` return iterator (more efficient)

```
for x in range(5):
  print(x)    // prints 0 to 4

for x in range(3, 6):
  print(x)    // prints 3 to 5

for x in range(3, 8, 2):
  print(x)   // prints every 2nd from 3 to 7
```

for loops with dictionaries:

```
for name, price in menu_prices.items():
  print(name, ': $', format(price, '.2f'), sep="")   // sep removes space separator in print
```

`while` loop - repeat as long as certain boolean condition met
```
count = 0
while count < 5:
  print(count)
  count += 1
```

  - `break` - used to exit for/while loops
  - `continue` - used to skip current block & return to
  `for/while` statement

```
count = 0
while True:
  print(count)
  count += 1
  if count >= 5:
    break

for x in range(10):
  if x % 2 == 0:
    continue
  print(x)
```

`else` clause for loops
  - when loop condition of `for/while` statement fails, code in `else` part is executed
  - if `break` executed inside for loop, `else` part is skipped
  - `else` part is executed even if there is a `continue`

```
count = 0
while(count < 5):
  print(count)
  count += 1
else:
  print("count value reached %d" %(count))

for i in range(1, 10):
  if(i % 5 == 0):
    break
  print(i)
else:
  print("this is not printed because for loop is terminated because of break but not due to fail in condition")
```

Functions - convenient way to divide code into useful blocks, reuse
  - a block is an area of code written in the format of:

```
block_head:
  1st block line
  2nd block line
```
  - where a block line is more Python code (even another block) &
  - block head if of the format
    - block_keyword block_name(arg1, arg2, ...)
    - block keywords are `if`, `for`, `while`, `def`

functions in Python are defined using `def` block keyword followed by functions name as block's name

```
def my_function():
  print("Hello from my function!")

def my_function_with_args(username, greeting):
  print("Hello, %s , From my function! I wish you $s" %(username, greeting))
```

functions return values to caller using `return` keyword

```
def sum_two_numbers(a, b):
  return a + b
```

call functions like JS, with `()`

```
sum_two_numbers(1, 2)
```

Classes and Objects
- encapsulation of variables and functions into a single entity, template to create Objects
- can instantiate multiple different objects of same class, each is an independent copy

```
class MyClass:
  variable = "blah"

  def function(self):
    print("This is a message inside the class")

myobjectx = MyClass()

myobjectx.variable    // access variables from instance of class
myobjectx.function()  // invoke function from instance of class
```

Dictionary

like a Hash: key, value pairs

iteration over dictionary does not keep order

```
phonebook = {
  "mike": 1234567890
  "betty": 1234569870
}

for name, number in phonebook.items():
  print("Phone number of %s is %d" % (name, number))

del phonebook["mike"]
phonebook.pop("betty")
```

Modules and Package

- modules are Python files with .py extension
- import other modules with `import` command
- first time module is loaded, it is initialized by executing code in module once
  - if another module imports the same module, it will not be loaded twice so local variables inside the module act as singleton
- `dir` - gives all functions in module
- `help` - gives more information about a specific function in module

- packages are namespaces which contain multiple packages and modules
- directories with a twist
  - each package in Python is a directory that MUST contain a file  `__init__.py`

```
import foo.bar    // must use foo prefix whenever access bar module

// alternatively
from foo import bar   // importing bar module to module namespace
```
