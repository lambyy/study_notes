# Sort Algorithms 

### Heaps
- complete binary tree, parents node is min/max, all children less/greater than their parents
- O(log n) to insert/delete due to heapify up/down, O(1) lookup max/min
- priority queue

### Heap sort
- algorithm using heap data structure to find max element and sorting it to end of unsorted array
- O(n log n) = O(n) to build heap, O(log n) to heapify 
- in place sorting, non recursive, unstable

### Merge sort
- algorithm sorting by splitting array, sorting and merging the resultant sorted arrays
- O(n log n) merge step, performing n appending operations to sort and merge log n lists
- O(n) extra space, recursive, stable, divide and conquer

### Counting sort
- based on keys between specific ranges, counts # objects having distinct key values
- steps:
  - counting array tracks number of each distinct element
  - modify array to store sum of previous counts
  - iterate though input array and place elements at index indicated by counting array and decrement position in counting array
- O(n), not comparison based, space complexity proportional to range
- efficient if range of input not significantly greater than number objects sorted
- often used as subroutine to another sorting algorithm

### Bubble sort
- O(n^2) comparisons & swaps, stable, O(n) extra space, O(n) for nearly sorted



### Binary search tree
- tree structure consisting of noes with parent, left & right child properties
- all nodes on left subtree must be less than root node, all nodes on right subtree must be greater than root node
- every subtree is a valid bst
- O(log n) insertion, deletion, find if able to keep tree balanced
