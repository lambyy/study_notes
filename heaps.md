# Heaps

Priority queue, min/max binary heap

A heap is a binary tree that follows the following constraints
  - has at most 2 children, and its children will have at most 2 children
  - is a complete tree (at every level, works towards becoming a full tree, fill from left to right)
  - each node must obey the heap property, parent of each node must be less than or equal to it (in a min heap)

## Primary Public Methods

### Peek
  - returns the min/max value of heap, constant time
  - root node of the binary tree is the min/max value

### Insert
  - push, O(log n) time
  - insert at last position and swap with parents until it is in correct position (heapify up)

### Extract
  - pop, O(log n) time
  - swap root node and last element, then swap root node with its smallest child until it is in the correct position (heapify down)
  - min/max can be popped from the end
  
