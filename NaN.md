NaN is a global property representing Not-A-Number

NaN is a type of number, a property of the Number class (Number.NaN)
NaN is usually a return value when a Math function fails (Math.sqrt(-1)) or when a function trying to parse a number fails (parseInt("something"))

NaN compares unequal to any other value, including to another NaN value
isNaN() can determine whether the value is NaN
alternatively, self comparison, NaN and only NaN will compare unequal to itself
NaN === NaN is false

NaN is the only value in JS that is unequal to itself
undefined === undefined is true
null === null is true

if a is NaN
a === a will return false, if and only a is NaN
