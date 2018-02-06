# Recursion
Recursion is the process where a function calls itself directly or indirectly. The corresponding function is called as recursive function.

### Base condition
In recursion, solution to base case is provided and solution of the bigger problem is expressed in terms of smaller problems.

### Stack Overflow
Stack overflow may arise if the base case if never reached/defined and memory is exhausted.

### Direct vs. Indirect Recursion
Direct recursive functions call the same function within itself while indirect recursive functions call another function that directly or indirectly calls the initial function.

### Tailed vs. Non-tailed Recursion
Tail recursive is when recursive call is the last thing executed  by the function.

### Memory Allocation
Memory is allocated on stack whenever a function is called. Memory for a recursive function is allocated on top of the calling function with different copies of local variables for each call. Memory is de-allocated when the recursive function reaches the base case and returns its value.

### Advantages vs. Disadvantages
Recursive & iterative programs can solve the same problems. Recursive programming requires more space (functions remain in stack) & time (due to function calls and return overhead). Recursive programming provides cleaner/simpler way to write code & some problems are inherently recursive. 
